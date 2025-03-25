const{
    soma,
    ehpar,
    paraMaiusculas,
    flitrarMaioresQue,
    obterUsuario,
    obterTemperatura,
    contarOcorrencias
} = require('./funcoes');

test('obter a temperetura correta', async () => {
    const apiMock = {
        getTemperatura: jest.fn().mockResolvedValue(30)
    };
    
    const temperatura = await obterTemperatura('Salvador', apiMock);

    expect(apiMock.getTemperatura).toHaveBeenCalledWith('Salvador');
    expect(temperatura).toBe(30);
});