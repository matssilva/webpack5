const url = window.location.pathname;

if (url === '/pc-page') {
    import('PcApp/PcPage').then(module => {
        const PcPage = module.default;
        const pcPage = new PcPage();
        pcPage.render();
    });
}


else if (url === '/press-me-page') {
    import('PressMeApp/PressMePage').then(module => {
        const PressMePage = module.default;
        const pressMePage = new PressMePage();
        pressMePage.render();
    });
}
