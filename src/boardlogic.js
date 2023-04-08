
for (let i = 0; i < 4; i++) {
    const row = $("<tr>");
    for (let j = 0; j < 4; j++) {
        const cell = $("<td>");
        cell.text(letters[i * 4 + j]);
        cell.click(() => {

            cell.addClass("clicked");

 } ) }}
       
 