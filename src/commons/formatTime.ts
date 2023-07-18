export class FormatTimeUtility {
  // format YYYY-MM-DD
  static formatTime(date: Date): string {
    const year = date.getFullYear();

    const month =
      date.getMonth().toString().length < 2
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;

    const day =
      date.getUTCDate().toString().length < 2
        ? `0${date.getUTCDate()}`
        : date.getUTCDate();
    return `${year}-${month}-${day}`;
  }
}
