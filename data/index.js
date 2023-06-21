const getData = () => {

    let counter = 0;
    const getID = () => {
        counter += 1;
        return counter;
    }

    const file = (title, content = '', type = 'pdf') => ({ filename: title, type: type, content, id: getID(), active: false });
    const folder = (title, files) => ({ filename: title, type: "folder", content: files, id: getID() });


    const items = [
        file('intro.page', "https://isubham.github.io/blog"),
        file('resume.pdf'),
        folder("projects", [file('descendents of the sun'), file('startup')]),
        folder("writings", [
            file('Remote Debuggin in node.page', "https://isubham.github.io/blog/remote-debugging-in-node.html"),
            file('naruto')
        ])
    ];

    return items;
}
const brand = {
    title: 'Subham Kumar',
    socialLinks: [
        { github: "http://github.com/isubham" },
        { linkedin: "http://linkedin/in/isubham" },
    ]
};

export { getData, brand };
