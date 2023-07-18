import { file, folder } from './schema';

const getMockFolders = async () => {

    return Promise.resolve([
        file('intro.page', "https://isubham.github.io/blog"),
        file('resume.pdf', "https://isubham.github.io/img/subham_kumar_resume_may_2023.pdf"),
        folder("projects", [file('descendents of the sun'), file('startup')]),
        folder("writings", [
            file('Remote Debuggin in node.page', "https://isubham.github.io/blog/remote-debugging-in-node.html"),
            file('naruto')
        ]),
        folder("youtube", [
            file("korean vlog la mina.youtube", "https://www.youtube.com/watch?v=kjA_XhHiTew"),
            file("Maths for programmers.youtube", "https://www.youtube.com/watch?v=bOCHTHkBoAs")
        ])
    ]);
}

const getMockBrand = () => {
    return Promise.resolve({
        title: 'Subham Kumar',
        socialLinks: [
            { github: "http://github.com/isubham" },
            { linkedin: "http://linkedin/in/isubham" },
        ]
    })
};

export { getMockFolders, getMockBrand };
