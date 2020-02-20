import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
    it('should reverse ABD', () => {
        const reversePipe = new ReversePipe();
        expect(reversePipe.transform('ABD')).toEqual('DBA');
    });

    it('should show list', () => {
        // Arrange
        const reversePipe = new ReversePipe();

        // Act
        const result = reversePipe.showList();

        // Assert
        expect(result).toContain('A');
    });
});
