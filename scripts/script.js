function gerarConteudo() {

    var conteudoTotal = '<head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br class="roteiro">#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br> </body>';




    var extCidades = conteudoTotal.split("*")[1] + " / " + conteudoTotal.split("*")[3] + " / " + conteudoTotal.split("*")[5];
    var extRoteiroA = conteudoTotal.split("#")[1] + "<br/> <br/>" + conteudoTotal.split("#")[4] + "<br/> <br/>" + conteudoTotal.split("#")[7];
    var countExtLocalSaoPaulo = extRoteiroA.split("|")[1].split(";").length;
    var countExtLocalLasVegas = extRoteiroA.split("|")[2].split(";").length;
    var countExtLocalMoscou = extRoteiroA.split("|")[3].split(";").length;
    var extCentroSP = conteudoTotal.split("#Roteiro B | Região: Centro")[1].split("#")[0];
    var extDownTownLA = conteudoTotal.split("#Roteiro B | Região: Downtown<br>;")[1].split("#")[0];
    var extDownTownLAClear = extDownTownLA.substring(
        extDownTownLA.indexOf(1),
        extDownTownLA.lastIndexOf(";")
    )

    document.getElementById("conteudoGeral").innerHTML = "Cidades<br/>" + extCidades + "<br/> <br/> Roteiros A<br/>" + extRoteiroA + "<br/> <br/>Quantidade Locais <br/>" + "Locais na cidade de São Paulo: " + countExtLocalSaoPaulo + "<br/>Locais na cidade de Las Vegas: " + countExtLocalLasVegas + "<br/>Locais na cidade de Moscou: " + countExtLocalMoscou + "<br/> <br/>Pontos turísticos localizados no bairro Centro da cidade de São Paulo" + extCentroSP + "<br/> <br/>Pontos turísticos localizados no bairro Downtown na cidade de Los Angeles <br/>" + extDownTownLAClear


}