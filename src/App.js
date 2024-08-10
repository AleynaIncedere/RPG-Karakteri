import './styles.css'
import { useState } from 'react'

import noCharacter from './utilities/noCharacter'
import Character from './components/Character'
import StatusBars from './components/StatusBars'
import Options from './components/Options'
import Button from './components/Button'
import attackOptionsList from './data/attackOptionsList'
import namesList from './data/namesList'

export default function App() {
  /* Challenge

    Bu video oyunu karakter yaratıcısının bir başlangıç karakterine ihtiyacı var. Göreviniz aşağıdakileri yaparak bir tane oluşturmak: 
    
        1. characterData adında bir state ve setCharacterData adında bir state ayarlama fonksiyonu tanımlayın. 
           
        2. İlk characterData state değerinin aşağıdaki özelliklere ve değerlere sahip bir nesne olmasını sağlayın.
           
        	Özellik		 	          Değerler  				  
			╷---------------╷------------------------------------╷					
		  | hat           |	true veya false                    |
			|---------------|------------------------------------|
			| shield        |	true veya false                    |
			|---------------|------------------------------------|
      | weapon        |	"sword" (kılıç) veya "staff" (asa) string	 |
			|---------------|------------------------------------|
      | name          |	Karakterin ismi olan bir string    | 
			|---------------|------------------------------------|
			| attackOptions |	Altı string*'den oluşan bir array, her biri bir saldırı adıdır |
      |---------------|------------------------------------|
			| stats         |	Üç özelliğe sahip bir nesne:       |
      |	              |     - hp: x**                      |
      |               |     - mp: y                        |
      |               |     - strength: z                  |
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 	
            
               * Kendi karakter adınızı ve saldırı seçeneklerinizi yazabilir veya bu dosyaya zaten içeri aktarılmış olan namesList ve attackOptionsList array'lerdekini kullanabilirsiniz.
                  
                ** stats için x, y ve z;  0 ile 100 (dahil) arasında herhangi bir sayı olmalıdır.
                
        3. Kodunuzu çalıştırdığınızda karakterinizin belirttiğiniz özellik değerleriyle ekranda göründüğünü görmelisiniz. Kodunuzu, characterData özellik değerlerinden bazılarını manuel olarak değiştirerek ve doğru sonuçları alıp almadığınızı görerek test etmelisiniz. Ayrıca, state ayarlama fonksiyonunu kullanarak değerleri rastgele değiştirecek olan "Değiştir" butonuna da tıklamalısınız
    */

  /* ️⬇️️ ------------------ Kodunuzu aşağıya yazın -----------------️️ ⬇️️ */
  const [characterData, setCharacterData] = useState({
    hat: false,
    shield: false,
    weapon: 'sword', 
    name: namesList[Math.floor(Math.random() * namesList.length)],
    attackOptions: attackOptionsList.slice(0, 6), 
    stats: {
      hp: Math.floor(Math.random() * 101),
      mp: Math.floor(Math.random() * 101),
      strength: Math.floor(Math.random() * 101)
    }
  })
  const updateCharacterData = () => {
    setCharacterData(prevData => ({
      ...prevData,
      hat: Math.random() > 0.5,
      shield: Math.random() > 0.5,
      weapon: Math.random() > 0.5 ? 'sword' : 'staff',
      name: namesList[Math.floor(Math.random() * namesList.length)],
      attackOptions: attackOptionsList.slice(0, 6), 
      stats: {
        hp: Math.floor(Math.random() * 101),
        mp: Math.floor(Math.random() * 101),
        strength: Math.floor(Math.random() * 101)
      }
    }))
  }

  /* ------------------------------------------------------------------

  
    
    ⚠️ ️Kodunuzu yukarıya yazın. Aşağıdaki kod değiştirilmemelidir ⚠️
    
    --------------------------------------------------------------------*/

  let dataToUse, functionToUse

  if (typeof characterData !== 'undefined') {
    dataToUse = characterData
  } else {
    dataToUse = noCharacter.noData
  }

  if (typeof setCharacterData !== 'undefined') {
    functionToUse = setCharacterData
  } else {
    functionToUse = noCharacter.noFunction
  }

  return (
    <div className='wrapper'>
      <StatusBars characterData={dataToUse} />

      <Character characterData={dataToUse} />

      <Options characterData={dataToUse} />

      <Button setCharacterData={functionToUse} />
    </div>
  )
}
