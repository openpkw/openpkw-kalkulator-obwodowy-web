describe('Routes', function () {
    var route;

    beforeEach(module('pocKalkulator'));

    beforeEach(inject(function ($route) {
        route = $route;
    }));

    it('Should use CalcController and calcView.html on "/"', function () {
        expect(route.routes['/'].controller).toBe('CalcController');
        expect(route.routes['/'].templateUrl).toBe('app/components/calc/calcView.html');
    });

    it('Should use InfoController and infoView.html on "/info"', function () {
        expect(route.routes['/info'].controller).toBe('InfoController');
        expect(route.routes['/info'].templateUrl).toBe('app/components/info/infoView.html');
    });

    it('Should redirect to "/calc" when undefined route', function () {
        expect(route.routes[null].redirectTo).toBe('/calc')
    });
});