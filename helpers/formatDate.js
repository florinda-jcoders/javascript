// Tue Mar 17 2026 18:38:43 GMT+0100 (Central European Standard Time)
// 17.03.2026
//  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// data = "Mar 17 2026"
export function formatDate(data){
  let muaji = data.slice(0,3)
  const data = data.slice(4,6)
  const viti = data.slice(7,11)
  console.log()

  switch(muaji){
    case "Jan":
      muaji = "January"
    
  }
}