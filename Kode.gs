/*
Project Name : Telegram Bot Jadwal Sholat Indonesia
Engine : Google App Script
Language Code : JavaScript
Date : 18-nov-2021 (2:00pm)
Last Update : none
Credit : @Aghisna12

Requirement:
- library telegram(unofficial) = https://lumpia.js.org/
Info : Semoga bermanfaat dan berguna bagi yang membutuhkan
PENTING!: data yang akan kita ambil dari api myQuran silakan kita ikuti syarat dan ketentuan penggunaannya.
Terimakasih : Allah SWT, Kedua Orangtua Tercinta
Diskusi : https://t.me/botindonesia
*/

var token = 'MASUKKAN TOKEN BOT DISINI';
var admin_id = 1234; // your id
const bot = new lumpia.init(token, {log_id: admin_id, prefix_command: "!/."});

var api_myQuran = "https://api.myquran.com";
const api = new lumpia.fetch(api_myQuran);

var daftar_kota = {"0101":"KAB. ACEH BARAT","0102":"KAB. ACEH BARAT DAYA","0103":"KAB. ACEH BESAR","0104":"KAB. ACEH JAYA","0105":"KAB. ACEH SELATAN","0106":"KAB. ACEH SINGKIL","0107":"KAB. ACEH TAMIANG","0108":"KAB. ACEH TENGAH","0109":"KAB. ACEH TENGGARA","0110":"KAB. ACEH TIMUR","0111":"KAB. ACEH UTARA","0112":"KAB. BENER MERIAH","0113":"KAB. BIREUEN","0114":"KAB. GAYO LUES","0115":"KAB. NAGAN RAYA","0116":"KAB. PIDIE","0117":"KAB. PIDIE JAYA","0118":"KAB. SIMEULUE","0119":"KOTA BANDA ACEH","0120":"KOTA LANGSA","0121":"KOTA LHOKSEUMAWE","0122":"KOTA SABANG","0123":"KOTA SUBULUSSALAM","0201":"KAB. ASAHAN","0202":"KAB. BATUBARA","0203":"KAB. DAIRI","0204":"KAB. DELI SERDANG","0205":"KAB. HUMBANG HASUNDUTAN","0206":"KAB. KARO","0207":"KAB. LABUHANBATU","0208":"KAB. LABUHANBATU SELATAN","0209":"KAB. LABUHANBATU UTARA","0210":"KAB. LANGKAT","0211":"KAB. MANDAILING NATAL","0212":"KAB. NIAS","0213":"KAB. NIAS BARAT","0214":"KAB. NIAS SELATAN","0215":"KAB. NIAS UTARA","0216":"KAB. PADANG LAWAS","0217":"KAB. PADANG LAWAS UTARA","0218":"KAB. PAKPAK BHARAT","0219":"KAB. SAMOSIR","0220":"KAB. SERDANG BEDAGAI","0221":"KAB. SIMALUNGUN","0222":"KAB. TAPANULI SELATAN","0223":"KAB. TAPANULI TENGAH","0224":"KAB. TAPANULI UTARA","0225":"KAB. TOBA SAMOSIR","0226":"KOTA BINJAI","0227":"KOTA GUNUNGSITOLI","0228":"KOTA MEDAN","0229":"KOTA PADANGSIDEMPUAN","0230":"KOTA PEMATANGSIANTAR","0231":"KOTA SIBOLGA","0232":"KOTA TANJUNGBALAI","0233":"KOTA TEBING TINGGI","0301":"KAB. AGAM","0302":"KAB. DHARMASRAYA","0303":"KAB. KEPULAUAN MENTAWAI","0304":"KAB. LIMA PULUH KOTA","0305":"KAB. PADANG PARIAMAN","0306":"KAB. PASAMAN","0307":"KAB. PASAMAN BARAT","0308":"KAB. PESISIR SELATAN","0309":"KAB. SIJUNJUNG","0310":"KAB. SOLOK","0311":"KAB. SOLOK SELATAN","0312":"KAB. TANAH DATAR","0313":"KOTA BUKITTINGGI","0314":"KOTA PADANG","0315":"KOTA PADANGPANJANG","0316":"KOTA PARIAMAN","0317":"KOTA PAYAKUMBUH","0318":"KOTA SAWAHLUNTO","0319":"KOTA SOLOK","0401":"KAB. BENGKALIS","0402":"KAB. INDRAGIRI HILIR","0403":"KAB. INDRAGIRI HULU","0404":"KAB. KAMPAR","0405":"KAB. KEPULAUAN MERANTI","0406":"KAB. KUANTAN SINGINGI","0407":"KAB. PELALAWAN","0408":"KAB. ROKAN HILIR","0409":"KAB. ROKAN HULU","0410":"KAB. SIAK","0411":"KOTA DUMAI","0412":"KOTA PEKANBARU","0501":"KAB. BINTAN","0502":"KAB. KARIMUN","0503":"KAB. KEPULAUAN ANAMBAS","0504":"KAB. LINGGA","0505":"KAB. NATUNA","0506":"KOTA BATAM","0507":"KOTA TANJUNG PINANG","0508":"PULAU TAMBELAN KAB. BINTAN","0509":"PEKAJANG KAB. LINGGA","0510":"PULAU SERASAN KAB. NATUNA","0511":"PULAU MIDAI KAB. NATUNA","0512":"PULAU LAUT KAB. NATUNA","0601":"KAB. BATANGHARI","0602":"KAB. BUNGO","0603":"KAB. KERINCI","0604":"KAB. MERANGIN","0605":"KAB. MUARO JAMBI","0606":"KAB. SAROLANGUN","0607":"KAB. TANJUNG JABUNG BARAT","0608":"KAB. TANJUNG JABUNG TIMUR","0609":"KAB. TEBO","0610":"KOTA JAMBI","0611":"KOTA SUNGAI PENUH","0701":"KAB. BENGKULU SELATAN","0702":"KAB. BENGKULU TENGAH","0703":"KAB. BENGKULU UTARA","0704":"KAB. KAUR","0705":"KAB. KEPAHIANG","0706":"KAB. LEBONG","0707":"KAB. MUKOMUKO","0708":"KAB. REJANG LEBONG","0709":"KAB. SELUMA","0710":"KOTA BENGKULU","0801":"KAB. BANYUASIN","0802":"KAB. EMPAT LAWANG","0803":"KAB. LAHAT","0804":"KAB. MUARA ENIM","0805":"KAB. MUSI BANYUASIN","0806":"KAB. MUSI RAWAS","0807":"KAB. MUSI RAWAS UTARA","0808":"KAB. OGAN ILIR","0809":"KAB. OGAN KOMERING ILIR","0810":"KAB. OGAN KOMERING ULU","0811":"KAB. OGAN KOMERING ULU SELATAN","0812":"KAB. OGAN KOMERING ULU TIMUR","0813":"KAB. PENUKAL ABAB LEMATANG ILIR","0814":"KOTA LUBUKLINGGAU","0815":"KOTA PAGAR ALAM","0816":"KOTA PALEMBANG","0817":"KOTA PRABUMULIH","0901":"KAB. BANGKA","0902":"KAB. BANGKA BARAT","0903":"KAB. BANGKA SELATAN","0904":"KAB. BANGKA TENGAH","0905":"KAB. BELITUNG","0906":"KAB. BELITUNG TIMUR","0907":"KOTA PANGKAL PINANG","1001":"KAB. LAMPUNG TENGAH","1002":"KAB. LAMPUNG UTARA","1003":"KAB. LAMPUNG SELATAN","1004":"KAB. LAMPUNG BARAT","1005":"KAB. LAMPUNG TIMUR","1006":"KAB. MESUJI","1007":"KAB. PESAWARAN","1008":"KAB. PESISIR BARAT","1009":"KAB. PRINGSEWU","1010":"KAB. TULANG BAWANG","1011":"KAB. TULANG BAWANG BARAT","1012":"KAB. TANGGAMUS","1013":"KAB. WAY KANAN","1014":"KOTA BANDAR LAMPUNG","1015":"KOTA METRO","1101":"KAB. LEBAK","1102":"KAB. PANDEGLANG","1103":"KAB. SERANG","1104":"KAB. TANGERANG","1105":"KOTA CILEGON","1106":"KOTA SERANG","1107":"KOTA TANGERANG","1108":"KOTA TANGERANG SELATAN","1201":"KAB. BANDUNG","1202":"KAB. BANDUNG BARAT","1203":"KAB. BEKASI","1204":"KAB. BOGOR","1205":"KAB. CIAMIS","1206":"KAB. CIANJUR","1207":"KAB. CIREBON","1208":"KAB. GARUT","1209":"KAB. INDRAMAYU","1210":"KAB. KARAWANG","1211":"KAB. KUNINGAN","1212":"KAB. MAJALENGKA","1213":"KAB. PANGANDARAN","1214":"KAB. PURWAKARTA","1215":"KAB. SUBANG","1216":"KAB. SUKABUMI","1217":"KAB. SUMEDANG","1218":"KAB. TASIKMALAYA","1219":"KOTA BANDUNG","1220":"KOTA BANJAR","1221":"KOTA BEKASI","1222":"KOTA BOGOR","1223":"KOTA CIMAHI","1224":"KOTA CIREBON","1225":"KOTA DEPOK","1226":"KOTA SUKABUMI","1227":"KOTA TASIKMALAYA","1301":"KOTA JAKARTA","1302":"KAB. KEPULAUAN SERIBU","1401":"KAB. BANJARNEGARA","1402":"KAB. BANYUMAS","1403":"KAB. BATANG","1404":"KAB. BLORA","1405":"KAB. BOYOLALI","1406":"KAB. BREBES","1407":"KAB. CILACAP","1408":"KAB. DEMAK","1409":"KAB. GROBOGAN","1410":"KAB. JEPARA","1411":"KAB. KARANGANYAR","1412":"KAB. KEBUMEN","1413":"KAB. KENDAL","1414":"KAB. KLATEN","1415":"KAB. KUDUS","1416":"KAB. MAGELANG","1417":"KAB. PATI","1418":"KAB. PEKALONGAN","1419":"KAB. PEMALANG","1420":"KAB. PURBALINGGA","1421":"KAB. PURWOREJO","1422":"KAB. REMBANG","1423":"KAB. SEMARANG","1424":"KAB. SRAGEN","1425":"KAB. SUKOHARJO","1426":"KAB. TEGAL","1427":"KAB. TEMANGGUNG","1428":"KAB. WONOGIRI","1429":"KAB. WONOSOBO","1430":"KOTA MAGELANG","1431":"KOTA PEKALONGAN","1432":"KOTA SALATIGA","1433":"KOTA SEMARANG","1434":"KOTA SURAKARTA","1435":"KOTA TEGAL","1501":"KAB. BANTUL","1502":"KAB. GUNUNGKIDUL","1503":"KAB. KULON PROGO","1504":"KAB. SLEMAN","1505":"KOTA YOGYAKARTA","1601":"KAB. BANGKALAN","1602":"KAB. BANYUWANGI","1603":"KAB. BLITAR","1604":"KAB. BOJONEGORO","1605":"KAB. BONDOWOSO","1606":"KAB. GRESIK","1607":"KAB. JEMBER","1608":"KAB. JOMBANG","1609":"KAB. KEDIRI","1610":"KAB. LAMONGAN","1611":"KAB. LUMAJANG","1612":"KAB. MADIUN","1613":"KAB. MAGETAN","1614":"KAB. MALANG","1615":"KAB. MOJOKERTO","1616":"KAB. NGANJUK","1617":"KAB. NGAWI","1618":"KAB. PACITAN","1619":"KAB. PAMEKASAN","1620":"KAB. PASURUAN","1621":"KAB. PONOROGO","1622":"KAB. PROBOLINGGO","1623":"KAB. SAMPANG","1624":"KAB. SIDOARJO","1625":"KAB. SITUBONDO","1626":"KAB. SUMENEP","1627":"KAB. TRENGGALEK","1628":"KAB. TUBAN","1629":"KAB. TULUNGAGUNG","1630":"KOTA BATU","1631":"KOTA BLITAR","1632":"KOTA KEDIRI","1633":"KOTA MADIUN","1634":"KOTA MALANG","1635":"KOTA MOJOKERTO","1636":"KOTA PASURUAN","1637":"KOTA PROBOLINGGO","1638":"KOTA SURABAYA","1701":"KAB. BADUNG","1702":"KAB. BANGLI","1703":"KAB. BULELENG","1704":"KAB. GIANYAR","1705":"KAB. JEMBRANA","1706":"KAB. KARANGASEM","1707":"KAB. KLUNGKUNG","1708":"KAB. TABANAN","1709":"KOTA DENPASAR","1801":"KAB. BIMA","1802":"KAB. DOMPU","1803":"KAB. LOMBOK BARAT","1804":"KAB. LOMBOK TENGAH","1805":"KAB. LOMBOK TIMUR","1806":"KAB. LOMBOK UTARA","1807":"KAB. SUMBAWA","1808":"KAB. SUMBAWA BARAT","1809":"KOTA BIMA","1810":"KOTA MATARAM","1901":"KAB. ALOR","1902":"KAB. BELU","1903":"KAB. ENDE","1904":"KAB. FLORES TIMUR","1905":"KAB. KUPANG","1906":"KAB. LEMBATA","1907":"KAB. MALAKA","1908":"KAB. MANGGARAI","1909":"KAB. MANGGARAI BARAT","1910":"KAB. MANGGARAI TIMUR","1911":"KAB. NGADA","1912":"KAB. NAGEKEO","1913":"KAB. ROTE NDAO","1914":"KAB. SABU RAIJUA","1915":"KAB. SIKKA","1916":"KAB. SUMBA BARAT","1917":"KAB. SUMBA BARAT DAYA","1918":"KAB. SUMBA TENGAH","1919":"KAB. SUMBA TIMUR","1920":"KAB. TIMOR TENGAH SELATAN","1921":"KAB. TIMOR TENGAH UTARA","1922":"KOTA KUPANG","2001":"KAB. BENGKAYANG","2002":"KAB. KAPUAS HULU","2003":"KAB. KAYONG UTARA","2004":"KAB. KETAPANG","2005":"KAB. KUBU RAYA","2006":"KAB. LANDAK","2007":"KAB. MELAWI","2008":"KAB. MEMPAWAH","2009":"KAB. SAMBAS","2010":"KAB. SANGGAU","2011":"KAB. SEKADAU","2012":"KAB. SINTANG","2013":"KOTA PONTIANAK","2014":"KOTA SINGKAWANG","2101":"KAB. BALANGAN","2102":"KAB. BANJAR","2103":"KAB. BARITO KUALA","2104":"KAB. HULU SUNGAI SELATAN","2105":"KAB. HULU SUNGAI TENGAH","2106":"KAB. HULU SUNGAI UTARA","2107":"KAB. KOTABARU","2108":"KAB. TABALONG","2109":"KAB. TANAH BUMBU","2110":"KAB. TANAH LAUT","2111":"KAB. TAPIN","2112":"KOTA BANJARBARU","2113":"KOTA BANJARMASIN","2201":"KAB. BARITO SELATAN","2202":"KAB. BARITO TIMUR","2203":"KAB. BARITO UTARA","2204":"KAB. GUNUNG MAS","2205":"KAB. KAPUAS","2206":"KAB. KATINGAN","2207":"KAB. KOTAWARINGIN BARAT","2208":"KAB. KOTAWARINGIN TIMUR","2209":"KAB. LAMANDAU","2210":"KAB. MURUNG RAYA","2211":"KAB. PULANG PISAU","2212":"KAB. SUKAMARA","2213":"KAB. SERUYAN","2214":"KOTA PALANGKARAYA","2301":"KAB. BERAU","2302":"KAB. KUTAI BARAT","2303":"KAB. KUTAI KARTANEGARA","2304":"KAB. KUTAI TIMUR","2305":"KAB. MAHAKAM ULU","2306":"KAB. PASER","2307":"KAB. PENAJAM PASER UTARA","2308":"KOTA BALIKPAPAN","2309":"KOTA BONTANG","2310":"KOTA SAMARINDA","2401":"KAB. BULUNGAN","2402":"KAB. MALINAU","2403":"KAB. NUNUKAN","2404":"KAB. TANA TIDUNG","2405":"KOTA TARAKAN","2501":"KAB. BOALEMO","2502":"KAB. BONE BOLANGO","2503":"KAB. GORONTALO","2504":"KAB. GORONTALO UTARA","2505":"KAB. POHUWATO","2506":"KOTA GORONTALO","2601":"KAB. BANTAENG","2602":"KAB. BARRU","2603":"KAB. BONE","2604":"KAB. BULUKUMBA","2605":"KAB. ENREKANG","2606":"KAB. GOWA","2607":"KAB. JENEPONTO","2608":"KAB. KEPULAUAN SELAYAR","2609":"KAB. LUWU","2610":"KAB. LUWU TIMUR","2611":"KAB. LUWU UTARA","2612":"KAB. MAROS","2613":"KAB. PANGKAJENE DAN KEPULAUAN","2614":"KAB. PINRANG","2615":"KAB. SIDENRENG RAPPANG","2616":"KAB. SINJAI","2617":"KAB. SOPPENG","2618":"KAB. TAKALAR","2619":"KAB. TANA TORAJA","2620":"KAB. TORAJA UTARA","2621":"KAB. WAJO","2622":"KOTA MAKASSAR","2623":"KOTA PALOPO","2624":"KOTA PAREPARE","2701":"KAB. BOMBANA","2702":"KAB. BUTON","2703":"KAB. BUTON SELATAN","2704":"KAB. BUTON TENGAH","2705":"KAB. BUTON UTARA","2706":"KAB. KOLAKA","2707":"KAB. KOLAKA TIMUR","2708":"KAB. KOLAKA UTARA","2709":"KAB. KONAWE","2710":"KAB. KONAWE KEPULAUAN","2711":"KAB. KONAWE SELATAN","2712":"KAB. KONAWE UTARA","2713":"KAB. MUNA","2714":"KAB. MUNA BARAT","2715":"KAB. WAKATOBI","2716":"KOTA BAU-BAU","2717":"KOTA KENDARI","2801":"KAB. BANGGAI","2802":"KAB. BANGGAI KEPULAUAN","2803":"KAB. BANGGAI LAUT","2804":"KAB. BUOL","2805":"KAB. DONGGALA","2806":"KAB. MOROWALI","2807":"KAB. MOROWALI UTARA","2808":"KAB. PARIGI MOUTONG","2809":"KAB. POSO","2810":"KAB. SIGI","2811":"KAB. TOJO UNA-UNA","2812":"KAB. TOLI-TOLI","2813":"KOTA PALU","2901":"KAB. BOLAANG MONGONDOW","2902":"KAB. BOLAANG MONGONDOW SELATAN","2903":"KAB. BOLAANG MONGONDOW TIMUR","2904":"KAB. BOLAANG MONGONDOW UTARA","2905":"KAB. KEPULAUAN SANGIHE","2906":"KAB. KEPULAUAN SIAU TAGULANDANG BIARO","2907":"KAB. KEPULAUAN TALAUD","2908":"KAB. MINAHASA","2909":"KAB. MINAHASA SELATAN","2910":"KAB. MINAHASA TENGGARA","2911":"KAB. MINAHASA UTARA","2912":"KOTA BITUNG","2913":"KOTA KOTAMOBAGU","2914":"KOTA MANADO","2915":"KOTA TOMOHON","3001":"KAB. MAJENE","3002":"KAB. MAMASA","3003":"KAB. MAMUJU","3004":"KAB. MAMUJU TENGAH","3005":"KAB. MAMUJU UTARA","3006":"KAB. POLEWALI MANDAR","3101":"KAB. BURU","3102":"KAB. BURU SELATAN","3103":"KAB. KEPULAUAN ARU","3104":"KAB. MALUKU BARAT DAYA","3105":"KAB. MALUKU TENGAH","3106":"KAB. MALUKU TENGGARA","3107":"KAB. MALUKU TENGGARA BARAT","3108":"KAB. SERAM BAGIAN BARAT","3109":"KAB. SERAM BAGIAN TIMUR","3110":"KOTA AMBON","3111":"KOTA TUAL","3201":"KAB. HALMAHERA BARAT","3202":"KAB. HALMAHERA TENGAH","3203":"KAB. HALMAHERA UTARA","3204":"KAB. HALMAHERA SELATAN","3205":"KAB. KEPULAUAN SULA","3206":"KAB. HALMAHERA TIMUR","3207":"KAB. PULAU MOROTAI","3208":"KAB. PULAU TALIABU","3209":"KOTA TERNATE","3210":"KOTA TIDORE KEPULAUAN","3211":"KOTA SOFIFI","3212":"KOTA SOFIFI","3301":"KAB. ASMAT","3302":"KAB. BIAK NUMFOR","3303":"KAB. BOVEN DIGOEL","3304":"KAB. DEIYAI","3305":"KAB. DOGIYAI","3306":"KAB. INTAN JAYA","3307":"KAB. JAYAPURA","3308":"KAB. JAYAWIJAYA","3309":"KAB. KEEROM","3310":"KAB. KEPULAUAN YAPEN","3311":"KAB. LANNY JAYA","3312":"KAB. MAMBERAMO RAYA","3313":"KAB. MAMBERAMO TENGAH","3314":"KAB. MAPPI","3315":"KAB. MERAUKE","3316":"KAB. MIMIKA","3317":"KAB. NABIRE","3318":"KAB. NDUGA","3319":"KAB. PANIAI","3320":"KAB. PEGUNUNGAN BINTANG","3321":"KAB. PUNCAK","3322":"KAB. PUNCAK JAYA","3323":"KAB. SARMI","3324":"KAB. SUPIORI","3325":"KAB. TOLIKARA","3326":"KAB. WAROPEN","3327":"KAB. YAHUKIMO","3328":"KAB. YALIMO","3329":"KOTA JAYAPURA","3330":"KAB. YAPEN WAROPEN","3401":"KAB. FAKFAK","3402":"KAB. KAIMANA","3403":"KAB. MANOKWARI","3404":"KAB. MANOKWARI SELATAN","3405":"KAB. MAYBRAT","3406":"KAB. PEGUNUNGAN ARFAK","3407":"KAB. RAJA AMPAT","3408":"KAB. SORONG","3409":"KAB. SORONG SELATAN","3410":"KAB. TAMBRAUW","3411":"KAB. TELUK BINTUNI","3412":"KAB. TELUK WONDAMA","3413":"KOTA SORONG"}

//mencari kode kota dengan katakunci yang diminta
function cariKota(cari) {
  var hasil = [];
  for (kode_kota in daftar_kota) {
    if (!(daftar_kota[kode_kota].toLowerCase()).includes(cari.toLowerCase())) {
      continue;
    }
    if (daftar_kota[kode_kota].toLowerCase() == cari.toLowerCase()) {
      return [{'kode':kode_kota, 'kota':daftar_kota[kode_kota]}];
    } else {
      hasil.push({'kode':kode_kota, 'kota':daftar_kota[kode_kota]});
    }
  }
  return hasil
}

//untuk membuat nilai hari, dari hari sekarang
function cariHari(hari, format) {
  var date = new Date();
  if (hari) {
    date.setDate(date.getDate() + parseInt(hari));
  }
  return Utilities.formatDate(date, 'Asia/Jakarta', format);
}

//mencari data jadwal sholat dari api myQuran. dengan paramater kode kota dan tanggal
function infoSholat(nama_kota, kode_kota) {
  var date = new Date();
  var tanggal = Utilities.formatDate(date, "Asia/Jakarta", "yyyy/MM/dd");
  var respon = api.get("/v1/sholat/jadwal/" + kode_kota + "/" + tanggal);
  try {
    if (respon.status) {
      var data_sholat = respon.data;
      return "🕌 <b>Jadwal Sholat untuk wilayah " + data_sholat.lokasi + " (" + data_sholat.daerah + ") dan sekitarnya</b>\n\n<code><b>" + data_sholat.lokasi + " (" + data_sholat.jadwal.tanggal + ")</b>\n\n\tImsak   = " + data_sholat.jadwal.imsak + "\n\tSubuh   = " + data_sholat.jadwal.subuh + "\n\tDzuhur  = " + data_sholat.jadwal.dzuhur + "\n\tAshar   = " + data_sholat.jadwal.ashar + "\n\tMaghrib = " + data_sholat.jadwal.maghrib + "\n\tIsya    = " + data_sholat.jadwal.isya + "\n\nSumber:KEMENAG RI</code>";
    } else {
      return "Data Empty!";
    }
  } catch (e) {
    return "Server Error : " + e.message;
  }
}

//mencari informasi jadwalsholat yang langsung dipanggil untuk private message di bot dengan parameter katakunci
function cariInfoSholat(cari) {
  var respon = cariKota(cari);
  if (respon.length == 0) {
    return "Maaf, Pencarian Tidak Ditemukan";
  }
  if (respon.length > 1) {
    var hasil = "Maaf, Pencarian Tidak Ditemukan\n\n<i>Mungkin yang anda maksud:</i>\n";
    for (var i = 0; i < respon.length; i++) {
      hasil += "\t‣ (" + respon[i].kode + ") <code>" + respon[i].kota + "</code>\n";
    }
    return hasil;
  } else {
    return infoSholat(respon[0].kota, respon[0].kode);
  }
}

function doPost(e) {
  bot.doPost(e);
}

bot.start(ctx => ctx.reply("Assalamuallaikum Wr Wb\nSemoga sehat selalu...\n\ngunakan perintah /help untuk penggunaannya."));
bot.cmd("help", ctx => ctx.replyIt("penggunaan:\n<code>/sholat lokasi(kab/kota)</code>\n\ncontoh:\n<code>/sholat sleman</code>", {parse_mode: "HTML"}));
bot.hears(/[!/.]sholat (.*)/i, (ctx) => ctx.replyIt(cariInfoSholat(ctx.match[1]), {parse_mode: "HTML"}));

//setting webhook
function setWebhook() {
  var url_deploy = "MASUKKAN URL HASIL DEPLOY DISINI";
  var res = bot.telegram.setWebhook(url_deploy);
  Logger.log(res);
}
