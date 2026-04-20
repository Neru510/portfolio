export const ASSETS = {
    basePath: '/portfolio',
    bg: '/portfolio/img/background.jpg',
    pp: '/portfolio/img/pp.jpeg',
    cv: '/portfolio/img/CV_RIGAUX_Heloise.pdf',
    projects: (name) => `/portfolio/img/projects/${name}/`,
    components: (name) => `/portfolio/img/components/${name}/`,
    skills: (i) => `/portfolio/img/projects/skills/skill${i}.png`,
};

export const getImgPath = (path) => {
    if (!path) return null;
    if (path.startsWith('/')) return path;
    return path.startsWith('img') ? `/portfolio/${path}` : path;
};