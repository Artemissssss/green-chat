const TelegramApi = require('node-telegram-bot-api')

const token = "5251851978:AAE8CDP2qLYm-uXM2i54znm31p-JFKPvA2w"

const bot = new TelegramApi(token, {
    polling: true
})


const start = () => {
    let banWords = ['путин топ', "россия великая", "россия", "слава россии", "безмамный", "блять", "артем лох", "хз", "артем пиздун", "артем сука", "артем уебан", "артем скотина", "артем чмо"]

    function forbiden(b) {
        for (let i = 0; i < banWords.length; i++) {
            let a = b.toLowerCase()
            if (a.indexOf(banWords[i]) !== -1) {
                return true;
            }
        }
    }
    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg)
        if (text == "gogog") {
            bot.sendMessage(chatId, `Привіт, звертайтесь до мене Інфо(Інфо вокзал, Інфо магазини і тд)! Це група де ми ділимося досвідом біжеців в місті Бітігайм-Бісінген(район Людвігсбург).\nКорисну інформацію ви можете знайти на:\nhttps://uahelp.wiki/stuttgart\nhttps://t.me/+839gnK1hQPE5Zjgy\nКорисні адреси:\nAuf dem Wasen 9 (соціолат)\nFreibergerstraße 51 (Jobcenter)\nStuttgarterstraße 53/55 (Familienkasse)\nLöchgauerstraße 22 (міграційна служба)\nSchwätzgässle 3 (Можна отримати подарункові сертифікати Kaufland на 20 євро, шкільний рюкзак та бланк для оформлення картки тафеля(окремо і для харчового, і для тафелю одежі))\nJahnstraße 91 (Харчовий тафель)\nЩе декілька порад:\n1)Завантажити додаток DB Navigator(для потягів) та Google Maps(для автобусів)\n2)Пароль від двері 1908`)
        } else if (text == "gayP") {
            bot.sendMessage(chatId, "ggggg")
            bot.deleteMessage(chatId, msg.message_id + 1)
        }
        if (text !== undefined && chatId !== 1052973544) {
            if (msg.chat.title == undefined) {
                await bot.sendMessage(1052973544, `Нове сповіщення з чату(#${chatId}) ім'я/дата/чат айді/айді юзера/айді сповіщення/текст #${msg.from.id}`)
            } else if (msg.chat.title !== undefined) {
                await bot.sendMessage(1052973544, `Нове сповіщення з групи (#${chatId})#${msg.chat.title.split(" ").join("_")} ім'я/дата/чат айді/айді юзера/айді сповіщення/текст#${msg.from.id}`)
            }
            await bot.sendMessage(1052973544, `${msg.from.last_name} ${msg.from.first_name} ${msg.from.username}`)
            await bot.sendMessage(1052973544, `${msg.date}`)
            await bot.sendMessage(1052973544, `${chatId}`)
            await bot.sendMessage(1052973544, `${msg.from.id}`)
            await bot.sendMessage(1052973544, `${msg.message_id}`)
            await bot.sendMessage(1052973544, `${text}`)
        }
        if (msg.new_chat_participant !== undefined) {
            if (msg.new_chat_participant !== undefined && msg.new_chat_participant.is_bot !== true) {
                //bot.sendMessage(chatId, `Привіт, звертайтесь до мене Інфо(Інфо вокзал, Інфо магазини і тд)! ${'@'+msg.new_chat_participant.username}, це група де ми ділимося досвідом біжеців в місті Бітігайм-Бісінген(район Людвігсбург).\nКорисну інформацію ви можете знайти на:\nhttps://uahelp.wiki/stuttgart\nhttps://t.me/+839gnK1hQPE5Zjgy\nКорисні адреси:\nAuf dem Wasen 9 (соціолат)\nFreibergerstraße 51 (Jobcenter)\nStuttgarterstraße 53/55 (Familienkasse)\nLöchgauerstraße 22 (міграційна служба)\nSchwätzgässle 3 (Можна отримати подарункові сертифікати Kaufland на 20 євро, шкільний рюкзак та бланк для оформлення картки тафеля(окремо і для харчового, і для тафелю одежі))\nJahnstraße 91 (Харчовий тафель)\nЩе декілька порад:\n1)Завантажити додаток DB Navigator(для потягів) та Google Maps(для автобусів)\n2)Пароль від двері 1908`)
                //setTimeout(() => {
                    //bot.deleteMessage(chatId, msg.message_id + 1)
                //}, 150);
                console.log("ggg")
            } else if (msg.new_chat_participant.is_bot == true) {
                bot.banChatMember(chatId, msg.new_chat_participant.id)
                bot.banChatMember(chatId, msg.from.id)
            }
        }
        if (msg.left_chat_participant !== undefined || msg.new_chat_participant !== undefined) {
            var msgId = msg.message_id;
            await bot.sendMessage(1052973544, `${msg.new_chat_participant.last_name} ${msg.new_chat_participant.first_name} ${msg.new_chat_participant.username}`)
            await bot.sendMessage(1052973544, `${msg.new_chat_participant.id}`)
            bot.deleteMessage(chatId, msgId);
        } else if (text !== undefined && forbiden(text) == true) {
            var msgId = msg.message_id;
            bot.deleteMessage(chatId, msgId);
        } else if (text !== undefined && text.split(" ")[0] == "Інфо") {
            if (text.split(" ")[1] == "вокзал") {
                await bot.sendMessage(chatId, "Вокзал Бітігайма-Бісенгена:")
                await bot.sendLocation(chatId, "48.94805715519405", "9.137243895169027")
            } else if (text.split(" ")[1] == "магазини") {
                await bot.sendMessage(chatId, "Магазини Бітігайма-Бісенгена:")
                await bot.sendMessage(chatId, "Kaufland")
                await bot.sendLocation(chatId, "48.96077667186489", "9.130724226063325")
                await bot.sendMessage(chatId, "Aldi Sud")
                await bot.sendLocation(chatId, "48.95622658475422", "9.131871889615075")
                await bot.sendMessage(chatId, "Lidl")
                await bot.sendLocation(chatId, "48.954918549494984", "9.121920911909006")
                await bot.sendMessage(chatId, "DM")
                await bot.sendLocation(chatId, "48.96077667186489", "9.130724226063325")
            } else if (text.split(" ")[1] == "банк" || text.split(" ")[1] == "банки") {
                await bot.sendMessage(chatId, "Банки Бітігайма-Бісенгена:")
                await bot.sendMessage(chatId, "Sparkasse Ludwigsburg(можна відкрити рахунок тільки з паспортом)")
                await bot.sendLocation(chatId, "48.95555150619434", "9.13461491525611")
            } else if (text.split(" ")[1] == "бан" && msg.from.username == 'Artemis_Weinstein' || msg.from.username == 'Anna_ukre' || msg.from.username == 'build_kharkiv') {
                bot.banChatMember(chatId, msg.reply_to_message.from.id)
                bot.deleteMessage(chatId, msg.message_id)
            } else if (text.split(" ")[1] == "бан" && (msg.from.username !== 'Artemis_Weinstein' || msg.from.username !== 'Anna_ukre' || msg.from.username !== 'build_kharkiv')) {
                bot.sendMessage(chatId, "У вас недостатньо прав")
            } else if (text.split(" ")[1] == "надіслати" && msg.from.username == 'Artemis_Weinstein') {
                await bot.sendMessage(parseInt(text.split(" ")[2]), text.split("&&")[1])
                await bot.sendMessage(chatId, "Ok")
            } else if (text.split(" ")[1] == "видалити" && msg.from.username == 'Artemis_Weinstein') {
                await bot.deleteMessage(parseInt(text.split(" ")[2]), parseInt(text.split("&&")[1]))
                await bot.sendMessage(chatId, "Ok")
            }else if (text.split(" ")[1] == "видалитиЛ" && msg.from.username == 'Artemis_Weinstein') {
                await bot.banChatMember(parseInt(text.split(" ")[2]), parseInt(text.split("&&")[1]))
                await bot.sendMessage(chatId, "Ok")
            }else if (text.split(" ")[1] == "карта" && msg.from.username == 'Artemis_Weinstein') {
                await bot.sendLocation((text.split(" ")[2]), text.split("&&")[1].split(", ")[0], text.split("&&")[1].split(", ")[1])
                await bot.sendMessage(chatId, "Ok")
            } else {
                bot.setMyDefaultAdministratorRights
                bot.sendMessage(chatId, `${"@"+msg.from.username}, у мене нема відповіді, але ви можете знайти відповідь на https://uahelp.wiki/stuttgart, або задати питання в чаті.`)
            }
        }

    })
}
start()