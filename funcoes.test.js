const{
    soma,
    ehPar,
    paraMaiusculas,
    filtrarMaioresQue,
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
}) ;

test('somar dois valores', () => {
    const a = 2;
    const b = 3;

    const resultado =  soma(a, b);
    expect(resultado).toBe(5);   
 });

 test('verificar se um número é par', () => {
    const resultado = ehPar(4);

    expect(resultado).toBe(true);
 });

test('converter uma string para maiúsculas', () => {
    const resultado = paraMaiusculas('abc');

    expect(resultado).toBe('ABC');
});

test('obter usuário pelo ID', () => {
    const db = [
        { id: 1, nome: 'João' },
        { id: 2, nome: 'Maria' }
    ];

    const usuario = obterUsuario(2, db);

    expect(usuario).toEqual({ id: 2, nome: 'Maria' });
});
    
