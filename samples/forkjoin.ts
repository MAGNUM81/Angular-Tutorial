/*
forkJoin(
  this.http.get('some/api/welcomeMessage'),
  language$,
  dateRange$
    .pipe(tap(([startDate, endDate]) => { 
      this.startDate = startDate;
      this.endDate = endDate;
    })),
  users$.pipe(tap(users => this.setUsers(users))),
  this.http
    .get('some/api/chart')
    .pipe(tap(chart => this.chartData = chart))
)
.subscribe(([welcomeMsg, lang]) => {
  this.setWelcomeMessage(welcomeMsg, lang);
  // all data aquired, wire-up everything
  this.launch();
});
*/