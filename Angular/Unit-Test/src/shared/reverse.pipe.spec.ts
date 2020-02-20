import { ReversePipe } from "./reverse.pipe";

describe('Reverse Pipe', () => {

    it('reverse the value', () => {
        let reversePipe = new ReversePipe()
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });

});