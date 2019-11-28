var newsDivCount = 3;

// Add News
function addNews() {
    var mainNews = document.getElementById("main");

    var newsDiv = document.createElement('div');
    newsDiv.id = "newsDiv" + (newsDivCount + 1);

    var title = document.createElement('h3');
    title.textContent = document.getElementById('newsTitle').value;

    var news = document.createElement('div');
    news.textContent = document.getElementById('newsContent').value;

    newsDiv.appendChild(title);
    newsDiv.appendChild(news);

    newsDiv.className = 'jumbotron';

    mainNews.appendChild(newsDiv);

    newsDivCount++;

    cleanModal();

    initializeLayout();
}

// Clean Modal Content
function cleanModal() {
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';
    document.getElementById('btn-close-modal').click();
}

// Get News Div Count
function getNewsDivCount() {
    return newsDivCount;
}

// Initialize Layout
function initializeLayout() {
    changeColor(document.getElementById("color").value);
    changeMenuPosition(document.getElementById("position").value);
    dragAndDrop();
}

// Add Default News
function defaultNews() {
    var mainNews = document.getElementById("main");

    var newsDiv1 = document.createElement('div');
    newsDiv1.id = "newsDiv1";
    var newsDiv2 = document.createElement('div');
    newsDiv2.id = "newsDiv2";
    var newsDiv3 = document.createElement('div');
    newsDiv3.id = "newsDiv3";

    var title1 = document.createElement('h3');
    title1.textContent = "IPS - Alunos de Excelência"
    var title2 = document.createElement('h3');
    title2.textContent = "IPS - Professor de Referência";
    var title3 = document.createElement('h3');
    title3.textContent = "MES - PAI indispensável";

    var news1 = document.createElement('div');
    news1.textContent = "O Instituto Politécnico de Setúbal (IPS) honrou, no dia 03 de Fevereiro de 2019, os alunos José Carlos Ferreira da Silva e João Bernardo Ladislau Freitas como alunos de excelência deste instituto. É de referir que pertenceram à Licenciatura de Engenharia Informática (LEI) e neste momento frequentam o Mestrado em Engenharia de Software (MES).";
    var news2 = document.createElement('div');
    news2.textContent = "O Instituto Politécnico de Setúbal (IPS), mais concretamente pela Escola Superior de Tecnologia de Setúbal (ESTS) honrou, no dia 03 de Fevereiro de 2019, o professor José Sena como professor de referência. É de salientar que foi um voto unânime realizado pelos alunos deste instituto.";
    var news3 = document.createElement('div');
    news3.textContent = "Considerado por alunos e professores do Mestrado em Engenharia de Software (MES) do Instituto Politécnico de Setúbal (IPS), mais concretamente pela Escola Superior de Tecnologia de Setúbal (ESTS) classificaram a unidade curricular PAI (Programação Avançada para a Internet) como uma cadeira indispensável para a aprendizagem dos alunos e para o seu desenvolvimento técnico."

    newsDiv1.appendChild(title1);
    newsDiv1.appendChild(news1);
    newsDiv2.appendChild(title2);
    newsDiv2.appendChild(news2);
    newsDiv3.appendChild(title3);
    newsDiv3.appendChild(news3);

    newsDiv1.className = 'jumbotron';
    newsDiv2.className = 'jumbotron';
    newsDiv3.className = 'jumbotron';

    mainNews.appendChild(newsDiv1);
    mainNews.appendChild(newsDiv2);
    mainNews.appendChild(newsDiv3);
}