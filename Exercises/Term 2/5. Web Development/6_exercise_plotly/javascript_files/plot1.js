var year = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
       2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

var arable_land_brazil = [30.924583699244103,
 30.990028882024003,
 31.0554740648039,
 31.1207996037396,
 31.198209170939897,
 31.275618738140302,
 31.521965413357503,
 31.8094695709811,
 32.1206632097572,
 32.558918611078504,
 32.5948835506464,
 32.6369263974999,
 32.4998145520415,
 32.7225913899504,
 32.7273771437186,
 32.7181645677148,
 32.9466843101456,
 32.974680969689395,
 33.3576728793727,
 33.8100342899258,
 33.8100342899258];

var country_name_brazil = 'Brazil';

var trace1 = {
/* TODO: Use the year, arable_land_brazil, and country_name_brazil to create a trace for a line chart */
  x: year,
  y: arable_land_brazil,
  mode: "lines",
  type: "scatter",
  name: country_name_brazil
};

var arable_land_germany = [49.67917502148379,
 49.6634105817984,
 49.6404526572124,
 49.776517105037,
 49.1489483638031,
 48.912451640636206,
 48.822012037833204,
 48.6355558103537,
 48.7400017201342,
 48.7799982796686,
 48.8330083725198,
 48.5948612066988,
 48.61330197608051,
 48.535696870607794,
 48.4380826711798,
 47.9100324181656,
 47.9659169153087,
 47.8108681930338,
 47.8588626461821,
 47.9363714531384,
 47.9592041483809];

var country_name_germany = 'Germany';
var trace2 = {
/* TODO: Create another trace for the Germany data using a line chart */
  x: year,
  y: arable_land_germany,
  mode: "lines",
  type: "scatter",
  name: country_name_germany
};


var arable_land_china = [55.6902039146848,
 55.6944173715386,
 55.7435214092539,
 55.7808021320313,
 55.7222181390954,
 55.601913887829596,
 55.3795417237072,
 55.2323417623281,
 54.9767049909297,
 55.0086611269185,
 55.115181785736894,
 54.763679479991296,
 54.810017687289296,
 54.80799387248529,
 54.8084187711588,
 54.8080992214598,
 54.8084187711588,
 54.8084187711588,
 54.8084187711588,
 54.8084187711588,
 56.2229587724434];
var country_name_china = 'China';
var trace3 = {
/* TODO: Create another trace for the China data using a line chart */
  x: year,
  y: arable_land_china,
  mode: "lines",
  type: "scatter",
  name: country_name_china
};


var layout = {
  title:'Percent of Land Used for Agriculture <br> 1990-2015',
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('plot1', data, layout);