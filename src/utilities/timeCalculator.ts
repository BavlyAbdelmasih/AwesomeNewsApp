export function calculateNumberOfHoursElapsedFromNow(
  createdAt: string,
): number {
  var date1 = new Date(createdAt);
  var date2 = new Date();

  var Difference_In_Time = date2.getTime() - date1.getTime();

  var Difference_In_Hours = Math.round(Difference_In_Time / (1000 * 3600));
  return Difference_In_Hours;
}
