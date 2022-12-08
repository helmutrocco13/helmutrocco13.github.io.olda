let id = decodeURIComponent(window.location.hash.slice(1))
function getFlags(code) {
    var flags = "https://emulatoros.up.railway.app/flags?q=" + code
    return flags
}
function mapEventType(type) {
  if (type === 'booking') {
      return 'card';
  }
  return type;
}
function eventToColour(eventType) {
  if (eventType === 'goal') {
      return 'green';
  }
  if (eventType === 'booking') {
      return 'yellow';
  }
  return 'gray';
}

function PlayByPlay(match) {
  console.log(match)
  const events = [
    ...match.home_team_events.map(event => (Object.assign(Object.assign({}, event), { country: match.home_team_country }))),
    ...match.away_team_events.map(event => (Object.assign(Object.assign({}, event), { country: match.away_team_country })))
  ];
  events.sort((a, b) => b.id - a.id);
  console.log(events)
  return (events)
}
function interval(json) {
  const play = document.getElementById('play');
  var events = PlayByPlay(json);
  const home = json.home_team_country
  const away = json.away_team_country
  console.log(play)
  for(app in events) {
    
    if (events[app].country === home ) {
     
    var eventelm = document.createElement("div");
    eventelm.setAttribute("style", "text-align:right;")
      play.appendChild(eventelm);
      eventelm.innerHTML = `<span class="type ${eventToColour(events[app].type_of_event)}">${mapEventType(events[app].type_of_event)}</span>
      <p>${events[app].player}</p>`

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("style", "width: 100%; height: 58px;")
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        play.appendChild(svg);
        svg.innerHTML = ` 
        <rect x="40%" y="30%" width="20%" height="100%" fill="#ffffff"></rect>
        <circle cx="50%" cy="30%" r="10%" fill="#ffffff"></circle>`

      var p = document.createElement("p");
      p.setAttribute("style", "margin:0;")
      p.innerHTML = `${events[app].time}`
      play.appendChild(p);
  } else {
    var p = document.createElement("p");
      p.setAttribute("style", "margin:0;text-align:right;")
      p.innerHTML = `${events[app].time}`
      play.appendChild(p);

   

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "width: 100%; height: 58px;")
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      play.appendChild(svg);
      svg.innerHTML = ` 
      <rect x="40%" y="30%" width="20%" height="100%" fill="#ffffff"></rect>
      <circle cx="50%" cy="30%" r="10%" fill="#ffffff"></circle>`

      var eventelm = document.createElement("div");
      eventelm.setAttribute("style", "text-align:left;")
        play.appendChild(eventelm);
        eventelm.innerHTML = `<span class="type ${eventToColour(events[app].type_of_event)}">${mapEventType(events[app].type_of_event)}</span>
        <p>${events[app].player}</p>`

      
  }


}
}

function percentage(partialValue, totalValue) {
  var percent = (100 * partialValue) / totalValue
  var fixed = percent.toFixed(2);
  return fixed;
} 
function create() {
    $(function () {
        $.getJSON(
            "https://emulatoros.up.railway.app/api?q=matches/" + id,
            function (json) {
                var format = moment(json.datetime);
                const date = format.tz('America/Chicago').format('llll');
                var main = document.getElementById('main');
                var team1 = json.home_team;
                var team2 = json.away_team;
                var home = team1.name;
                var away = team2.name;
                var homestats = json.home_team_statistics
                var awaystats = json.away_team_statistics
                var appelm = document.createElement("div");

                appelm.className = "live";

                appelm.innerHTML =
                    `
                    <div class="content div-child-box bg-dark-gray py-2 position-relative">
  <div class="header d-flex">
    <div class=" justify-content-center d-flex flex-column align-items-center col"><img src="${getFlags(team1.country)}"></img><span>${home}<span></div>
    <div class="col text-center">Played on<br>${date} CT</div>
    <div class=" justify-content-center d-flex flex-column align-items-center col"><img src="${getFlags(team2.country)}"></img><span>${away}<span></div>
  </div>
  <div class="d-grid play bg-dark-gray"id="play"></div>
  </div>`
                const attempts = homestats.attempts_on_goal
                if ( attempts === null ){
 var table = document.createElement('table')
    table.setAttribute('class', 'div-child-box bg-dark-gray py-2 position-relative')
    table.innerHTML = `<tbody><tr>  <td>${team1.goals}</td>  <td>Goals</td>  <td>${team2.goals}</td></tr></thead>`
    appelm.appendChild(table)
    console.log(' null' + json.attempts_on_goal)
   
  } else {
       var table = document.createElement('table')
    table.setAttribute('class', 'div-child-box bg-dark-gray py-2 position-relative')
    table.innerHTML = `<tbody><tr>  <td>${team1.goals}</td>  <td>Goals</td>  <td>${team2.goals}</td></tr><tr>  <td>${homestats.attempts_on_goal}</td>  <td>Shots</td><td>${awaystats.attempts_on_goal}</td></tr><tr><td>${homestats.on_target}</td><td>Shots On Target</td><td>${awaystats.on_target}</td></tr><tr><td>${percentage(homestats.passes_completed, homestats.num_passes)}%</td><td>Pass Accuracy</td><td>${percentage(awaystats.passes_completed, awaystats.num_passes)}%</td></tr><tr><td>${homestats.fouls_committed}</td><td>Fouls</td><td>${awaystats.fouls_committed}</td></tr> <tr><td>${homestats.yellow_cards}</td><td>Yellow Cards</td><td>${awaystats.yellow_cards}</td></tr><tr><td>${homestats.red_cards}</td><td>Red Cards</td><td>${awaystats.red_cards}</td></tr><tr><td>${homestats.offsides}</td><td>Offsides</td><td>${awaystats.offsides}</td></tr><tr><td>${homestats.corners}</td><td>Corners</td><td>${awaystats.corners}</td></tr></thead>`
  appelm.appendChild(table)
  console.log('not null'+ json.attempts_on_goal)
    
  }


                // check if playing
               
                main.appendChild(appelm);
                interval(json);

            });
    });
}
create();
