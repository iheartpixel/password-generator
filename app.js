const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstOutput = document.getElementById("first-output")
let secondOutput = document.getElementById("second-output")

function generatePasswords() {
    let password = 0
    for (let i = 0; i < 14; i++) {
        let randomNumber = Math.floor( Math.random() * characters.length )
        password += characters[randomNumber]
    }
    return password
}

function renderPasswords() {
    firstOutput.textContent = generatePasswords()
    secondOutput.textContent = generatePasswords()
}

const copyLeftPassword = async () => {
    try {
      await navigator.clipboard.writeText( firstOutput.innerText );
      console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
      }
}

const copyRightPassword = async () => {
    try {
      await navigator.clipboard.writeText( secondOutput.innerText );
      console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
      }
}