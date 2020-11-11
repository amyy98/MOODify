function isSelected(day, value) {
    return value.isSame(day, "day");
  }
  
  export function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }
  
  function isToday(day) {
    return day.isSame(new Date(), "day");
  }
  
  export default function dayStyles(day, value) {
    if (beforeToday(day)) return "before";
    if (isSelected(day, value)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }
  