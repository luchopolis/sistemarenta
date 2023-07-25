import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryFailedError } from 'typeorm';
import { RawQueryException } from 'src/commons/Exceptions/RawQueryException';
import { ContractUnitService } from 'src/contractUnits/contractUnits.service';

import queries from './queries';
import { Invoice } from './entities/invoice.entity';
import { FormatTimeUtility } from 'src/commons/formatTime';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectDataSource() private readonly connection: DataSource,
    private readonly contractUnitService: ContractUnitService,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      // get contractValue
      const contractValue = await this.contractUnitService.findContractValue(
        createInvoiceDto.contractTenantUnitId,
      );

      const extractValue: number = contractValue[0].valueContract;

      const invoiceData = new Invoice();
      const actualDate = new Date();

      invoiceData.contractTenantUnitId = createInvoiceDto.contractTenantUnitId;
      invoiceData.dueDate = FormatTimeUtility.addDays(actualDate, 15);
      invoiceData.status = 'PENDING';
      invoiceData.value = extractValue;

      // save invoice
      const invoiceSaved = await this.connection.query(
        queries.SAVE_INVOICE(invoiceData),
      );
      return invoiceSaved;
    } catch (error: unknown) {
      if (error.constructor === QueryFailedError) {
        throw new RawQueryException(error);
      }

      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
