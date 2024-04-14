const moduleList = [
    //await import('./modules/page-transition.js'),
    await import('./modules/language.js'), 
    await import('./modules/onscreen.js'),
    await import('./modules/header.js'),
    await import('./modules/ticker.js'),
    await import('./modules/faq.js'), 
    await import('./modules/contact-form.js'),
    await import('./modules/mobile-menu.js'), 
    await import('./modules/testimonial.js'),
    await import('./modules/popup-video.js'),
    await import('./modules/popup-sale.js'),
];

moduleList.forEach(module => module.init());