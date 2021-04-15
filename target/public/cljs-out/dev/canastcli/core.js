// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('goog.dom');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('canastcli.spiel');
goog.require('canastcli.menu');
goog.require('canastcli.drop_file_stream');
canastcli.core.world = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),canastcli.spiel.__GT_Spiel.call(null),new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false,new cljs.core.Keyword(null,"historie","historie",893875268),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(0)], null),new cljs.core.Keyword(null,"log","log",-1595516004),null,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),false,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"spiel-typ","spiel-typ",153299079),null], null));
canastcli.core.keine_korrektur = (function canastcli$core$keine_korrektur(){
return cljs.core.swap_BANG_.call(null,canastcli.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcli.core.neues_spiel = (function canastcli$core$neues_spiel(){
var spiel = canastcli.spiel.neues_spiel.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)));
var log = canastcli.drop_file_stream.log_neues_spiel.call(null,"logs.txt",canastcli.core.world,new cljs.core.Keyword(null,"log","log",-1595516004));
return cljs.core.swap_BANG_.call(null,canastcli.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcli.core.begonnenes_spiel_verwerfen = (function canastcli$core$begonnenes_spiel_verwerfen(){
var spiel = canastcli.spiel.neues_spiel.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)));
var log = canastcli.drop_file_stream.log_neues_spiel.call(null,"logs.txt",canastcli.core.world,new cljs.core.Keyword(null,"log","log",-1595516004));
return cljs.core.swap_BANG_.call(null,canastcli.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcli.core.restauriere_spiel = (function canastcli$core$restauriere_spiel(){
return canastcli.drop_file_stream.lies_welt.call(null,"welt.txt",canastcli.core.world);
});
canastcli.core.gewonnene_spiele = (function canastcli$core$gewonnene_spiele(historie){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gwspiele","div.gwspiele",-1370155213),"Gewonnene Spiele bisher: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tr","div.tr",19325729),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.td","div.td",320676764),cljs.core.key.call(null,cljs.core.first.call(null,historie))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.td","div.td",320676764),cljs.core.key.call(null,cljs.core.second.call(null,historie))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tr","div.tr",19325729),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.td","div.td",320676764),cljs.core.val.call(null,cljs.core.first.call(null,historie))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.td","div.td",320676764),cljs.core.val.call(null,cljs.core.second.call(null,historie))], null)], null)], null)], null);
});
canastcli.core.geber_feststellung = (function canastcli$core$geber_feststellung(){
var pos = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4217__auto__ = ((52) * new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))));
var y__4218__auto__ = (450);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),"px"].join('');
if(cljs.core.not.call(null,canastcli.spiel.spiel_beendet_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))){
if(canastcli.spiel.geber_festgelegt_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"nebentab",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),pos], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.geber","div.geber",1255510733),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastcli.spiel.geber.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))," muss geben."].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nebentab","div.nebentab",-1749851017),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.geber","div.geber",1255510733),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26951_SHARP_){
return cljs.core.swap_BANG_.call(null,canastcli.core.world,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),p1__26951_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"noch festzulegen"], null),cljs.core.map.call(null,(function (tln){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null),tln], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," muss geben."], null)], null)], null);
}
} else {
return null;
}
});
canastcli.core.incr_gw_spiele = (function canastcli$core$incr_gw_spiele(hist,sieger){
return cljs.core.assoc.call(null,hist,sieger,(hist.call(null,sieger) + (1)));
});
canastcli.core.decr_gw_spiele = (function canastcli$core$decr_gw_spiele(hist,sieger){
return cljs.core.assoc.call(null,hist,sieger,(hist.call(null,sieger) - (1)));
});
canastcli.core.aktualisiere_historie = (function canastcli$core$aktualisiere_historie(spiel){
if(cljs.core.truth_(canastcli.spiel.spiel_beendet_QMARK_.call(null,spiel))){
return canastcli.core.incr_gw_spiele.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),canastcli.spiel.sieger.call(null,spiel));
} else {
return new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world));
}
});
canastcli.core.sieger_anzeige = (function canastcli$core$sieger_anzeige(){
var l = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))),"Spiel beendet: SiegerIn ist ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastcli.spiel.sieger.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))].join('');
var w = canastcli.drop_file_stream.delete_file_named.call(null,"welt.txt",canastcli.core.world,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637));
var f = canastcli.drop_file_stream.write_text.call(null,l,"logs.txt");
var h = canastcli.drop_file_stream.write_text.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))),"hist.txt");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gewinner","div.gewinner",-1068700811),["Gewonnen hat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastcli.spiel.sieger.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))].join('')], null);
});
canastcli.core.resultate = reagent.core.atom.call(null,cljs.core.zipmap.call(null,canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))),cljs.core.take.call(null,cljs.core.count.call(null,canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0)], null))));
canastcli.core.log_runde = (function canastcli$core$log_runde(w,resultate){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(w)),"Runde ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((canastcli.spiel.runde.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w)) + (1))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resultate),"\n"].join('');
});
canastcli.core.naechste_runde = (function canastcli$core$naechste_runde(){
var x = (1);
if(cljs.core.not.call(null,canastcli.spiel.spiel_beendet_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))){
canastcli.drop_file_stream.write_text.call(null,cljs.core.prn_str.call(null,cljs.core.deref.call(null,canastcli.core.world)),"welt.txt");

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(cljs.core.truth_(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))?(canastcli.spiel.runde.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))) - (1)):canastcli.spiel.runde.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell.smal","div.rTableCell.smal",79330606),(canastcli.spiel.runde.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))) + (1))], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (tln){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),(cljs.core.truth_(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))?canastcli.spiel.letztes_resultat.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),tln):""),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))?canastcli.spiel.letztes_resultat.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),tln):""),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26952_SHARP_){
var val = cljs.reader.read_string.call(null,p1__26952_SHARP_.target.value);
var res = cljs.core.swap_BANG_.call(null,canastcli.core.resultate,cljs.core.assoc,tln,val);
return null;
})], null)], null)], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var spiel = (cljs.core.truth_(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))?canastcli.spiel.korrigiere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),cljs.core.deref.call(null,canastcli.core.resultate)):canastcli.spiel.registriere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),cljs.core.deref.call(null,canastcli.core.resultate)));
var historie = canastcli.core.aktualisiere_historie.call(null,spiel);
var l = canastcli.core.log_runde.call(null,cljs.core.deref.call(null,canastcli.core.world),cljs.core.deref.call(null,canastcli.core.resultate));
var f = canastcli.drop_file_stream.write_text.call(null,l,"logs.txt");
var w = cljs.core.swap_BANG_.call(null,canastcli.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false,new cljs.core.Keyword(null,"historie","historie",893875268),historie,new cljs.core.Keyword(null,"log","log",-1595516004),l,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),cljs.core.not.call(null,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel)));
return w;
})], null),"speichern"], null)], null)], null);
} else {
return canastcli.core.sieger_anzeige.call(null);
}
});
canastcli.core.log_korrektur_gewonnener_spiele = (function canastcli$core$log_korrektur_gewonnener_spiele(w){
if(cljs.core.truth_(canastcli.spiel.spiel_beendet_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(w)),"Korrektur gewonnener Spiele","\n","gewonnen hat ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastcli.spiel.sieger.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w)))," noch nicht!","\n"].join('');
} else {
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(w);
}
});
canastcli.core.korrektur = (function canastcli$core$korrektur(w){
var h = (cljs.core.truth_(canastcli.spiel.spiel_beendet_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w)))?canastcli.core.decr_gw_spiele.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(w),canastcli.spiel.sieger.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w))):new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(w));
var l = canastcli.core.log_korrektur_gewonnener_spiele.call(null,w);
var f = (cljs.core.truth_(canastcli.spiel.spiel_beendet_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w)))?canastcli.drop_file_stream.write_text.call(null,l,"logs.txt"):null);
var s = canastcli.spiel.spiel_nicht_beendet.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(w));
return cljs.core.assoc.call(null,w,new cljs.core.Keyword(null,"spiel","spiel",-831112206),s,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),true,new cljs.core.Keyword(null,"historie","historie",893875268),h);
});
canastcli.core.ergebnis_fuer = (function canastcli$core$ergebnis_fuer(runde){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),runde], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell.smal","div.rTableCell.smal",79330606),runde], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (tln){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null),canastcli.spiel.resultat_in_runde.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),tln,(runde - (1)))], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))),((cljs.core._EQ_.call(null,runde,canastcli.spiel.anzahl_runden.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,canastcli.core.world,canastcli.core.korrektur);
})], null),"korrigiere"], null)], null):null)], null);
});
canastcli.core.zwischensumme_fuer = (function canastcli$core$zwischensumme_fuer(runde){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["zw-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runde)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell.rule.smal","div.rTableCell.rule.smal",1069860647)," "], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell.rule","div.rTableCell.rule",1579018653),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell.smal","div.rTableCell.smal",79330606),""], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null),canastcli.spiel.zwischen_summe.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),t,runde)], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))))], null)], null);
});
canastcli.core.runden_stand = (function canastcli$core$runden_stand(runde){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["rs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runde)].join('')], null),canastcli.core.ergebnis_fuer.call(null,runde),(((runde > (1)))?canastcli.core.zwischensumme_fuer.call(null,runde):null)], null);
});
canastcli.core.ergebnis_tabelle = (function canastcli$core$ergebnis_tabelle(){
var runden = (cljs.core.truth_(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))?canastcli.spiel.anzahl_runden.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))):(canastcli.spiel.anzahl_runden.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))) + (1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rTableBody",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"450px"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (r){
return canastcli.core.runden_stand.call(null,r);
}),cljs.core.range.call(null,(1),runden))),canastcli.core.naechste_runde.call(null)], null);
});
canastcli.core.render_spielablauf = (function canastcli$core$render_spielablauf(){
if(canastcli.spiel.teilnehmer_vorhanden_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spiel-typ","spiel-typ",153299079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)),"Canasta"))?canastcli.core.gewonnene_spiele.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTable","div.rTable",-2113231773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHeading","div.rTableHeading",-1118922742),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHead.smal","div.rTableHead.smal",-507572475),"Rde."], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHead","div.rTableHead",-1453689500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),s], null);
}),canastcli.spiel.teilnehmer_namen.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))))], null)], null),((canastcli.spiel.geber_festgelegt_QMARK_.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))))?canastcli.core.ergebnis_tabelle.call(null):null)], null),canastcli.core.geber_feststellung.call(null)], null);
} else {
return null;
}
});
canastcli.core.menu = (function canastcli$core$menu(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begonnenes-ignorieren","begonnenes-ignorieren",-1751147397),(function (){
return canastcli.core.begonnenes_spiel_verwerfen.call(null);
}),new cljs.core.Keyword(null,"restauriere-spiel","restauriere-spiel",-423481778),(function (){
return canastcli.core.restauriere_spiel.call(null);
})], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109),(function (){
return canastcli.core.neues_spiel.call(null);
}),new cljs.core.Keyword(null,"restauriere-spiel","restauriere-spiel",-423481778),(function (){
return canastcli.core.restauriere_spiel.call(null);
})], null);
}
});
canastcli.core.home_page = (function canastcli$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),canastcli.menu.menu.call(null,canastcli.core.menu.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"spiel-typ","spiel-typ",153299079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canastcli.core.world))], null),canastcli.core.render_spielablauf.call(null)], null);
});
/**
 * Liefert den body der Html-Seite (index.html).
 * Es muss ein div-Element mit der id app existieren:
 * <div id='app'> </div> 
 */
canastcli.core.get_app_element = (function canastcli$core$get_app_element(){
return goog.dom.getElement("app");
});
canastcli.core.mount_app_element = (function canastcli$core$mount_app_element(){
var temp__5735__auto__ = canastcli.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
canastcli.drop_file_stream.lies_edn.call(null,"hist.txt",canastcli.core.world,new cljs.core.Keyword(null,"historie","historie",893875268));

canastcli.drop_file_stream.lies_edn.call(null,"namen.txt",canastcli.core.world,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911));

canastcli.drop_file_stream.lies_edn.call(null,"spieltyp.txt",canastcli.core.world,new cljs.core.Keyword(null,"spiel-typ","spiel-typ",153299079));

canastcli.drop_file_stream.exists_file_named.call(null,"welt.txt",canastcli.core.world,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastcli.core.home_page], null),el);
} else {
return null;
}
});
canastcli.core.mount_app_element.call(null);
canastcli.core.on_reload = (function canastcli$core$on_reload(){
return canastcli.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
