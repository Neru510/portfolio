import localFont from 'next/font/local';

export const albertSans = localFont({
    src: [
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-Thin.woff2', weight: '100', style: 'thin' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-ThinItalic.woff2', weight: '100', style: 'italic' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-Italic.woff2', weight: '400', style: 'italic' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-Bold.woff2', weight: '700', style: 'normal' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-BoldItalic.woff2', weight: '700', style: 'italic' },
        { path: '../public/fonts/AlbertSans/webfonts/AlbertSans-Light.woff2', weight: '100', style: 'light' },
    ],
    display: 'swap',
});

export const alexandria = localFont({
    src: [
        { path:'../public/fonts/Alexandria/Alexandria-Regular.woff2', weight: '400', style: 'normal'},
    ],
    display: 'swap',
})