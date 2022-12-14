let generateList = function generateList(ary) {
    let ul = document.createElement('ul');

    ary.forEach(function (element) {
        let li = document.createElement('li');
        let childElement;

        if (Array.isArray(element)) {
            childElement = generateList(element);
        } else {
            childElement = document.createTextNode(element)
        }

        li.appendChild(childElement);
        ul.appendChild(li);
    })

    return ul;
}

document.body.appendChild(generateList([1, 2, 3]))
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]))

