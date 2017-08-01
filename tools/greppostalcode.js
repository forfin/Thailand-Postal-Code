/**
 * This script will grep postal code from wikipedia.
 * https://th.wikipedia.org/wiki/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%9B%E0%B8%A3%E0%B8%A9%E0%B8%93%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B9%84%E0%B8%97%E0%B8%A2
 */

var output = []
$('.mw-parser-output .mw-headline').each(function(){
	var province_name = this.innerText,
	table = this.parentNode.nextElementSibling
	$(table).find('tbody tr').each(function(){
		var district_name = this.querySelector('a').innerText,
		postal_code = this.querySelector('td[align="center"]').innerText

		output.push({province: province_name, district: district_name, postal_code: postal_code});
	})

})

console.log(JSON.stringify(output));
