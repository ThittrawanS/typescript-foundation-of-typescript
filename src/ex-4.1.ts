type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    return false;
  }

  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ 'user.age' is possibly 'undefined'.
/* เพราะ age?: number แปลว่าอายุจะมีหรือไม่มีก็ได้ แต่โค้ดเดิมเอา user.age
แล้วไปเทียบกับ 18 ทันที ทั้งที่ John ส่งมาแค่ชื่อกับ id ไม่มีอายุ TypeScript เลยไม่ยอมให้เทียบ
** วิธีแก้คือเช็คก่อนว่ามีอายุหรือไม่ ถ้าไม่มีให้ตอบ false
*/