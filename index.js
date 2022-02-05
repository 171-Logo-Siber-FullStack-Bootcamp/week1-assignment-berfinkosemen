var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//import { XMLHttpRequest } from "xmlhttprequest";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
/// XHR objesi oluşturuldu.

xhr.onload = () => {
	if (xhr.status === 200) {
		//Sunucudan yanıt alındığında onload() yöntemi çağrılır. Ayrıca sunucudan aldığımız yanıtın statusünü de kontrol etmemiz gerekir.
		//200 den başka herhangi bir yanıt, gönderi verilerini sağlamayacaktır.
		const users = JSON.parse(xhr.responseText);
		//Veriler, responseText özelliği kullanılarak elde edilir. Ancak JSON biçiminde olmayacaktır. 
		//Tekrar JSON'a dönüştürmek için JSON.parse() yöntemi kullanılır.
		console.log(users); 
	} else {
		console.log('Server response:', xhr.status);
	}
};

xhr.open('GET', apiUrl, true); 
//open() metoduna gerçekleştirmek istediğimiz HTTP yöntemini ve gerekli URL'yi ilettik. 

xhr.send();
//send() yöntemi ağ bağlantısını açar ve sunucuya istek gönderir. 