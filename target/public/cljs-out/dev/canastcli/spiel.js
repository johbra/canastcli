// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.spiel');
goog.require('cljs.core');
goog.require('canastcli.spieler');
canastcli.spiel.__GT_Spiel = (function canastcli$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"runde","runde",-1618531444),(0),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),null], null);
});
canastcli.spiel.geber = (function canastcli$spiel$geber(spiel){
return new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcli.spiel.runde = (function canastcli$spiel$runde(spiel){
return new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcli.spiel.spiel_beendet_QMARK_ = (function canastcli$spiel$spiel_beendet_QMARK_(spiel){
return new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcli.spiel.sieger = (function canastcli$spiel$sieger(spiel){
return new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcli.spiel.spiel_nicht_beendet = (function canastcli$spiel$spiel_nicht_beendet(spiel){
return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false);
});
canastcli.spiel.keine_korrektur = (function canastcli$spiel$keine_korrektur(world){
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcli.spiel.teilnehmer_vorhanden_QMARK_ = (function canastcli$spiel$teilnehmer_vorhanden_QMARK_(spiel){
return (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel))));
});
canastcli.spiel.spieler_mit_namen = (function canastcli$spiel$spieler_mit_namen(name,spiel){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19592_SHARP_){
return cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(p1__19592_SHARP_));
}),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcli.spiel.anzahl_runden = (function canastcli$spiel$anzahl_runden(spiel){
return cljs.core.count.call(null,canastcli.spieler.resultate.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel))));
});
canastcli.spiel.geber_festgelegt_QMARK_ = (function canastcli$spiel$geber_festgelegt_QMARK_(spiel){
return (!((new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel) == null)));
});
canastcli.spiel.begonnenes_spiel_QMARK_ = (function canastcli$spiel$begonnenes_spiel_QMARK_(spiel){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel))) && (canastcli.spiel.teilnehmer_vorhanden_QMARK_.call(null,spiel)) && ((canastcli.spiel.anzahl_runden.call(null,spiel) > (0))));
});
canastcli.spiel.neues_spiel = (function canastcli$spiel$neues_spiel(sp_namen){
return cljs.core.assoc.call(null,canastcli.spiel.__GT_Spiel.call(null),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.map.call(null,canastcli.spieler.__GT_Spieler,sp_namen));
});
canastcli.spiel.teilnehmer_namen = (function canastcli$spiel$teilnehmer_namen(spiel){
return cljs.core.sort.call(null,cljs.core._GT_,cljs.core.map.call(null,canastcli.spieler.spieler_name,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcli.spiel.restauriere_spiel = (function canastcli$spiel$restauriere_spiel(spiel){
return cljs.core.println.call(null,"restauriere-spiel");
});
canastcli.spiel.registriere = (function canastcli$spiel$registriere(spiel,resultate){
var teiln = cljs.core.map.call(null,(function (p__19594){
var vec__19595 = p__19594;
var name = cljs.core.nth.call(null,vec__19595,(0),null);
var res = cljs.core.nth.call(null,vec__19595,(1),null);
return canastcli.spieler.registriere.call(null,canastcli.spiel.spieler_mit_namen.call(null,name,spiel),res);
}),resultate);
var runde = (new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel) + (1));
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"summe","summe",-650249817),teiln));
var geber = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19593_SHARP_){
return (!(cljs.core._EQ_.call(null,p1__19593_SHARP_,new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel))));
}),canastcli.spiel.teilnehmer_namen.call(null,spiel)));
var s = cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),runde);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)),new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)))?new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(sieger):null),new cljs.core.Keyword(null,"geber","geber",604746862),geber);
});
canastcli.spiel.korrigiere = (function canastcli$spiel$korrigiere(spiel,resultate){
var teiln = cljs.core.map.call(null,(function (p__19598){
var vec__19599 = p__19598;
var name = cljs.core.nth.call(null,vec__19599,(0),null);
var res = cljs.core.nth.call(null,vec__19599,(1),null);
return canastcli.spieler.korrigiere.call(null,canastcli.spiel.spieler_mit_namen.call(null,name,spiel),res);
}),resultate);
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"summe","summe",-650249817),teiln));
return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)),new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)))?new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(sieger):null));
});
canastcli.spiel.resultat_in_runde = (function canastcli$spiel$resultat_in_runde(spiel,tln,runde){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(canastcli.spiel.spieler_mit_namen.call(null,tln,spiel)),runde);
});
canastcli.spiel.zwischen_summe = (function canastcli$spiel$zwischen_summe(spiel,tln,runde){
return canastcli.spieler.zwischen_summe.call(null,canastcli.spiel.spieler_mit_namen.call(null,tln,spiel),runde);
});
canastcli.spiel.letztes_resultat = (function canastcli$spiel$letztes_resultat(spiel,tln){
var s = canastcli.spiel.spieler_mit_namen.call(null,tln,spiel);
return cljs.core.last.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s));
});

//# sourceMappingURL=spiel.js.map
