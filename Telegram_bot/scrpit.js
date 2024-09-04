
// 1)в BotFather прописать /newbot
// 2)Придумать название бота
// 3)Придумать id-username для бота
// 4)скопировать токен в https://t-bot-r.netlify.app/
// 5)запустить созданный бот через Telegram прописав внутри группы /start
// 6)Протестить bot через сайт //t-bot-r.netlify.app/ - ввести id из json и сообщение
// 8)Создать группу в телеграм и добавить туда созданного бота
// 7)скопировать api в script.js после теста внутрь fetch get запрос
// 9)Найти id c минусом внутри api на https://t-bot-r.netlify.app/ и добавить в chatid для теста
// 10)после теста в scripte дописать token и сhatId в api где fetch и протестить
// 11)сформировать обьект из 2 input и отправить в телеграм



const message = document.querySelector('#inputMessage')
const number = document.querySelector('#inputNumber')
const form = document.querySelector('form')
const check = document.querySelector('.check')
const btn = document.querySelector('button')


btn.addEventListener('ckick', () => {
    alert(`${message.value} ${number.value}`)
})

const bot = {
    TOKEN:'5902026869:AAEbWUsAeU9R3Lon2k9RMnrU-LbTkFNZQ9o',
    chatId: '-924371586'
}

// https://api.telegram.org/bot/sendMessage?chat_id=&text=

form.addEventListener('submit', (e) => {
    // останавливает перезагрузку - form
    e.preventDefault()
    if(message.value && number.value) {
        const telegramMessage = `Message: ${message.value}  Number:${number.value}`
        const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`
        fetch(TELEGRAM_API) 
            .then(response => {
                console.log(response);
                if(response.ok) {
                    alert('message success')
                }
            })
            .catch(error => {
                alert(error)
            })
    } else {
        alert('not validated')
    }

})


check.addEventListener('click', () => {
    alert('check')
})