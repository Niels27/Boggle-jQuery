import logo from './logo.png'

//returns main element with logo
function component(){
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img');
    m.append(p);
    p.append(img);
    img.src = logo;
    img.alt = 'sample logo';
    return m;
}

export default component;