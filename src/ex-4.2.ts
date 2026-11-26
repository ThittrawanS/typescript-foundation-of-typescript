function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }

  return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ 'data' is of type 'unknown'.
/*unknown แปลว่ายังไม่รู้ว่าค่าที่ส่งมาเป็นอะไร
แต่โค้ดเดิมใช้ตัว data.toUpperCase() ทั้งที่ขั้นตอนนี้ใช้ได้กับข้อความเท่านั้น TypeScript เลยไม่ยอม
** วิธีแก้คือใช้ typeof เช็คก่อน ถ้าเป็นข้อความให้เปลี่ยนเป็นตัวพิมพ์ใหญ่ ถ้าเป็นตัวเลขอย่าง 123 ให้ตอบ "Not a string"
*/
