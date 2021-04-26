import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before (() => {
        browser.login('cegef16172@heroulo.com', 'test1234');
    });

    beforeEach(() => {
       MainPage.open();
    });

    it('Courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    })
});