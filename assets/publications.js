var papers = {"papers": [
  {
    "dateiso": 20180206,
    "title": "Winers and losers in area-based management of a small scale fishery in the Colombian Pacific",
    "authors": ["J López-Angarita", "A Tilley", "JM Díaz", "JP Hawkins", "EF Cagua", "CM Roberts"],
    "journal": "Frontiers in Marine Science",
    "date": "February 2018",
    "vol": "Volume 5",
    "pages": "23",
    "doi": "https://doi.org/10.3389/fmars.2018.00023",
    "localFileName": "10.3389_fmars.2018.00023"
  },
  {
    "dateiso": 20170722,
    "title": "Cophylogenetic signal is detectable in pollination interactions across ecological scales",
    "authors": ["M Hutchinson", "EF Cagua", "DB Stouffer"],
    "journal": "Ecology",
    "date": "July 2017",
    "vol": "Volume 98",
    "pages": "10:2640-2652",
    "doi": "https://doi.org/10.1002/ecy.1955",
    "localFileName": "10.1002_ecy.1955"
  },
  {
    "dateiso": 20170124,
    "title": "paco: implementing procrustean approach to cophylogeny in R",
    "authors": ["M Hutchinson", "EF Cagua", "JA Balbuena", "DB Stouffer", "T Poisot"],
    "journal": "Methods in Ecology and Evolution",
    "date": "January 2017",
    "vol": "Volume 8",
    "pages": "8:932-940",
    "doi": "https://doi.org/10.1111/2041-210X.12736",
    "localFileName": "10.1111_2041-210X.12736"
  },
  {
    "dateiso": 20150401,
    "title": "Acoustic telemetry reveals cryptic residency of whale sharks",
    "authors": ["EF Cagua", "JEM Cochran", "CA Rohner", "CEM Prebble", "TH Sinclair-Taylor", "SJ Pierce", "ML Berumen"],
    "journal": "Biology Letters",
    "date": "April 2015",
    "vol": "Volume 1",
    "pages": "4:20150092",
    "doi": "https://doi.org/10.1098/rsbl.2015.0092",
    "localFileName": "10.1098_rsbl.2015.0092"
  },
  {
    "dateiso": 20150301,
    "title": "Whale sharks target dense prey patches of sergestid shrimp off Tanzania",
    "authors": ["CA Rohner", "AJ Armstrong", "SJ Pierce", "CEM Prebble", "EF Cagua", "JEM Cochran", "ML Berumen", "AJ Richardson"],
    "journal": "Journal of Plankton Research",
    "date": "March 2015",
    "vol": "Volume 37",
    "pages": "2:352-362",
    "doi": "https://doi.org/10.1093/plankt/fbv010",
    "localFileName": "10.1093_plankt_fbv010"
  },
  {
    "dateiso": 20140812,
    "title": "Whale shark economics: a valuation of wildlife tourism in South Ari Atoll, Maldives",
    "authors": ["EF Cagua", "N Collins", "J Hancock", "R Rees"],
    "journal": "PeerJ",
    "date": "August 2014",
    "vol": "Volume 2",
    "pages": "e515",
    "doi": "https://doi.org/10.7717/peerj.515",
    "localFileName": "10.7717_peerj.515"
  },
  {
    "dateiso": 20130819,
    "title": "Topography and biological noise determine acoustic detectability on coral reefs",
    "authors": ["EF Cagua", "ML Berumen", "EHM Tyler"],
    "journal": "Coral Reefs",
    "date": "August 2013",
    "vol": "Volume 32",
    "pages": "4:1123-1134",
    "doi": "https://doi.org/10.1007/s00338-013-1069-2",
    "localFileName": "10.1007_s00338-013-1069-2"
  }
]}

function boldIfCagua(thisAuthor){
  if (thisAuthor == "EF Cagua"){
    return "<b>" + thisAuthor + "</b>"
  } else{
    return thisAuthor
  }
}

function formatAuthors(authors){
  for (var i = 0; i < authors.length; i++){
    authors[i] = boldIfCagua(authors[i])
  }
  return authors.join(", ")  
}

function formatJournal(paper){
  var formatedName = "<em>" + "<b>" + paper.journal + "</b>" + ". " + paper.date + ", " + paper.vol + ", " + paper.pages + "</em>"
  return formatedName
}

function createPaper(paper){
  // Create parent column
  var thisPaper = document.createElement("div")
  thisPaper.classList.add("col-md-6")
  thisPaper.classList.add("my-4")
  thisPaper.classList.add("px-4")
  // Create internal row
  var paperIntRow = document.createElement("div")
  paperIntRow.classList.add("row")
  // Create column for thumbnail
  var thumbnailCol = document.createElement("div")
  thumbnailCol.classList.add("col-sm-6")
  thumbnailCol.classList.add("d-none")
  thumbnailCol.classList.add("d-sm-block")
  thumbnailCol.classList.add("d-md-none")
  thumbnailCol.classList.add("d-lg-block")
  // Create thumbnail
  var pdfLink = document.createElement("a")
  pdfLink.setAttribute("href", "publications/" + paper.localFileName + ".pdf")
  pdfLink.setAttribute("target", "_blank")
  var thumbnail = document.createElement("img")
  thumbnail.setAttribute("src", "publications/thumbnails/" + paper.localFileName + ".png")
  thumbnail.classList.add("img-fluid")
  thumbnail.classList.add("img-thumbnail")
  // Create description column
  var descColumn = document.createElement("div")
  
  descColumn.classList.add("col-sm-6")
  descColumn.classList.add("col-md-12")
  descColumn.classList.add("col-lg-6")
  descColumn.classList.add("description-column")
  // Create title
  var paperTitle = document.createElement("h3")
  paperTitle.classList.add("paper-title")
  paperTitle.innerHTML = paper.title
  // Create author list
  var authorsP = document.createElement("p")
  authorsP.innerHTML = formatAuthors(paper.authors)
  // Create journal details
  var journalP = document.createElement("p")
  journalP.innerHTML = formatJournal(paper)
  // doi
  var doiP = document.createElement("p")
  doiP.classList.add("small")
  var doiLink = document.createElement("a")
  doiLink.setAttribute("href", paper.doi)
  doiLink.setAttribute("rel", "external")
  doiLink.setAttribute("target", "_blank")
  doiLink.innerText = paper.doi.substr(16)
  doiP.appendChild(doiLink)
  // Apend objects first image then description then overall
  var thumbnailLink = pdfLink.cloneNode(true)
  thumbnailLink.appendChild(thumbnail)
  thumbnailCol.appendChild(thumbnailLink)

  paperIntRow.appendChild(thumbnailCol)

  var titleLink = pdfLink.cloneNode(true)
  titleLink.appendChild(paperTitle)
  descColumn.appendChild(titleLink)
  descColumn.appendChild(authorsP)
  descColumn.appendChild(journalP)
  descColumn.appendChild(doiP)

  paperIntRow.appendChild(descColumn)
  thisPaper.appendChild(paperIntRow)

  return thisPaper
}

for (var i = 0; i < 6; i++){
  document.getElementById("latest-publications-row").appendChild(createPaper(papers.papers[i]))
}