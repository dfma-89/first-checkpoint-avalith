const url_users = "https://jsonplaceholder.typicode.com/users";

fetch (url_users)

.then ((response => response.json()))
.then ((data)=>showData (data))

function showData (data) {
    let body = ``;
    for (let i=0; i<data.length; i++) {
        body += `
        <table> <tr class="trts">
        <td> ${data[i].id}</td>
        <td> ${data[i].name} </td>
        <td> ${data[i].username} </td>
        <td> ${data[i].email} </td>
        <td> 
            <ul> 
                <li> ${data[i].address['street']} </li>
                <li> ${data[i].address['suite']} </li>
                <li> ${data[i].address['city']} </li>
                <li> ${data[i].address['zipcode']} </li>
                    <ul>
                        <li> ${data[i].address.geo['lat']} </li>
                        <li> ${data[i].address.geo['lng']} </li>
                    </ul>
            </ul>
        </td>
        <td> ${data[i].phone} </td>
        <td> ${data[i].website} </td>
        <td> 
            <ul>
            <li> ${data[i].company['name']} </li>
            <li> ${data[i].company['catchPhrase']} </li>
            <li> ${data[i].company['bs']} </li>
            </ul>
        </td>
        </tr>
        </table>
        `
    }
    document.getElementById ("fetch-petition").innerHTML = body;
}
