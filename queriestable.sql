CREATE TABLE "Users" (
  "id" serial PRIMARY KEY NOT NULL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "Role" int
);

CREATE TABLE "Roles" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar
);

CREATE TABLE "tenants" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar,
  "identifier" varchar,
  "lastname" varchar,
  "phonenumber" varchar,
  "userId" int,
  "status" boolean
);

CREATE TABLE "Units" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar,
  "address" varchar,
  "type" int
);

CREATE TABLE "typeUnits" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar
);

CREATE TABLE "ContractTenantUnit" (
  "id" serial PRIMARY KEY NOT NULL,
  "tenant" int,
  "unit" int,
  "dateContract" date,
  "endContract" date,
  "dayOfPayment" varchar,
  "state" boolean
);

CREATE TABLE "Invoices" (
  "id" serial PRIMARY KEY NOT NULL,
  "dueDate" date,
  "contractTenantUnitId" int,
  "value" float,
  "status" varchar,
  "created_by" int,
  "created_at" timestamp
);

CREATE TABLE "transactions" (
  "id" serial PRIMARY KEY NOT NULL,
  "amount" float,
  "datePayment" date,
  "invoiceId" int
);

ALTER TABLE "Users" ADD FOREIGN KEY ("Role") REFERENCES "Roles" ("id");

ALTER TABLE "Users" ADD FOREIGN KEY ("id") REFERENCES "tenants" ("id");

ALTER TABLE "Units" ADD FOREIGN KEY ("type") REFERENCES "typeUnits" ("id");

ALTER TABLE "ContractTenantUnit" ADD FOREIGN KEY ("unit") REFERENCES "Units" ("id");

ALTER TABLE "ContractTenantUnit" ADD FOREIGN KEY ("tenant") REFERENCES "tenants" ("id");

ALTER TABLE "Invoices" ADD FOREIGN KEY ("contractTenantUnitId") REFERENCES "ContractTenantUnit" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("invoiceId") REFERENCES "Invoices" ("id");

ALTER TABLE "Invoices" ADD FOREIGN KEY ("created_by") REFERENCES "Users" ("id");