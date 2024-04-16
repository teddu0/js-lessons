// Conditional statements

// Если промеждуток времени от 6 до 12 Goog morning
// Если промежуток врмени от 12 до 18 Good evening
// Остальное Good night

const hour = 19;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
