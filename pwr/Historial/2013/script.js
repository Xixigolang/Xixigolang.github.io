// 模拟数据（默认显示的所有记录）
const lotteryData = [
    //   12
    { date: "2013-12-31", mediodia: "43", tarde: "--", noche: "13" },
    { date: "2013-12-30", mediodia: "80", tarde: "--", noche: "18" },
    { date: "2013-12-29", mediodia: "64", tarde: "--", noche: "70" },
    { date: "2013-12-28", mediodia: "46", tarde: "--", noche: "66" },
    { date: "2013-12-27", mediodia: "18", tarde: "--", noche: "12" },
    { date: "2013-12-26", mediodia: "97", tarde: "--", noche: "64" },
    { date: "2013-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-12-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-12-23", mediodia: "66", tarde: "--", noche: "07" },
    { date: "2013-12-22", mediodia: "90", tarde: "--", noche: "30" },
    { date: "2013-12-21", mediodia: "84", tarde: "--", noche: "74" },
    { date: "2013-12-20", mediodia: "21", tarde: "--", noche: "58" },
    { date: "2013-12-19", mediodia: "14", tarde: "--", noche: "50" },
    { date: "2013-12-18", mediodia: "32", tarde: "--", noche: "86" },
    { date: "2013-12-17", mediodia: "41", tarde: "--", noche: "06" },
    { date: "2013-12-16", mediodia: "52", tarde: "--", noche: "55" },
    { date: "2013-12-15", mediodia: "01", tarde: "--", noche: "67" },
    { date: "2013-12-14", mediodia: "83", tarde: "--", noche: "04" },
    { date: "2013-12-13", mediodia: "04", tarde: "--", noche: "29" },
    { date: "2013-12-12", mediodia: "61", tarde: "--", noche: "36" },
    { date: "2013-12-11", mediodia: "31", tarde: "--", noche: "00" },
    { date: "2013-12-10", mediodia: "61", tarde: "--", noche: "47" },
    { date: "2013-12-09", mediodia: "39", tarde: "--", noche: "66" },
    { date: "2013-12-08", mediodia: "24", tarde: "--", noche: "71" },
    { date: "2013-12-07", mediodia: "30", tarde: "--", noche: "62" },
    { date: "2013-12-06", mediodia: "24", tarde: "--", noche: "06" },
    { date: "2013-12-05", mediodia: "65", tarde: "--", noche: "95" },
    { date: "2013-12-04", mediodia: "73", tarde: "--", noche: "42" },
    { date: "2013-12-03", mediodia: "60", tarde: "--", noche: "81" },
    { date: "2013-12-02", mediodia: "63", tarde: "--", noche: "03" },
    { date: "2013-12-01", mediodia: "40", tarde: "--", noche: "07" }, 

    //   11
    { date: "2013-11-30", mediodia: "62", tarde: "--", noche: "69" },
    { date: "2013-11-29", mediodia: "08", tarde: "--", noche: "98" },
    { date: "2013-11-28", mediodia: "09", tarde: "--", noche: "62" },
    { date: "2013-11-27", mediodia: "12", tarde: "--", noche: "04" },
    { date: "2013-11-26", mediodia: "79", tarde: "--", noche: "99" },
    { date: "2013-11-25", mediodia: "26", tarde: "--", noche: "98" },
    { date: "2013-11-24", mediodia: "27", tarde: "--", noche: "04" },
    { date: "2013-11-23", mediodia: "92", tarde: "--", noche: "26" },
    { date: "2013-11-22", mediodia: "58", tarde: "--", noche: "61" },
    { date: "2013-11-21", mediodia: "26", tarde: "--", noche: "36" },
    { date: "2013-11-20", mediodia: "05", tarde: "--", noche: "07" },
    { date: "2013-11-19", mediodia: "62", tarde: "--", noche: "67" },
    { date: "2013-11-18", mediodia: "76", tarde: "--", noche: "32" },
    { date: "2013-11-17", mediodia: "88", tarde: "--", noche: "41" },
    { date: "2013-11-16", mediodia: "37", tarde: "--", noche: "79" },
    { date: "2013-11-15", mediodia: "25", tarde: "--", noche: "42" },
    { date: "2013-11-14", mediodia: "91", tarde: "--", noche: "93" },
    { date: "2013-11-13", mediodia: "77", tarde: "--", noche: "94" },
    { date: "2013-11-12", mediodia: "07", tarde: "--", noche: "58" },
    { date: "2013-11-11", mediodia: "26", tarde: "--", noche: "14" },
    { date: "2013-11-10", mediodia: "66", tarde: "--", noche: "78" },
    { date: "2013-11-09", mediodia: "64", tarde: "--", noche: "51" },
    { date: "2013-11-08", mediodia: "93", tarde: "--", noche: "17" },
    { date: "2013-11-07", mediodia: "39", tarde: "--", noche: "10" },
    { date: "2013-11-06", mediodia: "98", tarde: "--", noche: "78" },
    { date: "2013-11-05", mediodia: "36", tarde: "--", noche: "05" },
    { date: "2013-11-04", mediodia: "33", tarde: "--", noche: "90" },
    { date: "2013-11-03", mediodia: "13", tarde: "--", noche: "58" },
    { date: "2013-11-02", mediodia: "60", tarde: "--", noche: "18" },
    { date: "2013-11-01", mediodia: "14", tarde: "--", noche: "00" },

    //   10
    { date: "2013-10-31", mediodia: "10", tarde: "--", noche: "13" },
    { date: "2013-10-30", mediodia: "78", tarde: "--", noche: "37" },
    { date: "2013-10-29", mediodia: "11", tarde: "--", noche: "05" },
    { date: "2013-10-28", mediodia: "67", tarde: "--", noche: "21" },
    { date: "2013-10-27", mediodia: "62", tarde: "--", noche: "89" },
    { date: "2013-10-26", mediodia: "23", tarde: "--", noche: "41" },
    { date: "2013-10-25", mediodia: "39", tarde: "--", noche: "99" },
    { date: "2013-10-24", mediodia: "65", tarde: "--", noche: "18" },
    { date: "2013-10-23", mediodia: "66", tarde: "--", noche: "96" },
    { date: "2013-10-22", mediodia: "79", tarde: "--", noche: "01" },
    { date: "2013-10-21", mediodia: "51", tarde: "--", noche: "16" },
    { date: "2013-10-20", mediodia: "65", tarde: "--", noche: "91" },
    { date: "2013-10-19", mediodia: "14", tarde: "--", noche: "60" },
    { date: "2013-10-18", mediodia: "32", tarde: "--", noche: "62" },
    { date: "2013-10-17", mediodia: "96", tarde: "--", noche: "96" },
    { date: "2013-10-16", mediodia: "86", tarde: "--", noche: "14" },
    { date: "2013-10-15", mediodia: "57", tarde: "--", noche: "91" },
    { date: "2013-10-14", mediodia: "25", tarde: "--", noche: "13" },
    { date: "2013-10-13", mediodia: "23", tarde: "--", noche: "13" },
    { date: "2013-10-12", mediodia: "70", tarde: "--", noche: "21" },
    { date: "2013-10-11", mediodia: "67", tarde: "--", noche: "03" },
    { date: "2013-10-10", mediodia: "28", tarde: "--", noche: "68" },
    { date: "2013-10-09", mediodia: "59", tarde: "--", noche: "33" },
    { date: "2013-10-08", mediodia: "59", tarde: "--", noche: "61" },
    { date: "2013-10-07", mediodia: "33", tarde: "--", noche: "47" },
    { date: "2013-10-06", mediodia: "75", tarde: "--", noche: "42" },
    { date: "2013-10-05", mediodia: "24", tarde: "--", noche: "17" },
    { date: "2013-10-04", mediodia: "47", tarde: "--", noche: "20" },
    { date: "2013-10-03", mediodia: "83", tarde: "--", noche: "07" },
    { date: "2013-10-02", mediodia: "32", tarde: "--", noche: "57" },
    { date: "2013-10-01", mediodia: "57", tarde: "--", noche: "76" },

    //   09
    { date: "2013-09-30", mediodia: "48", tarde: "--", noche: "12" },
    { date: "2013-09-29", mediodia: "88", tarde: "--", noche: "59" },
    { date: "2013-09-28", mediodia: "93", tarde: "--", noche: "00" },
    { date: "2013-09-27", mediodia: "41", tarde: "--", noche: "72" },
    { date: "2013-09-26", mediodia: "27", tarde: "--", noche: "32" },
    { date: "2013-09-25", mediodia: "99", tarde: "--", noche: "96" },
    { date: "2013-09-24", mediodia: "32", tarde: "--", noche: "79" },
    { date: "2013-09-23", mediodia: "09", tarde: "--", noche: "37" },
    { date: "2013-09-22", mediodia: "62", tarde: "--", noche: "62" },
    { date: "2013-09-21", mediodia: "50", tarde: "--", noche: "68" },
    { date: "2013-09-20", mediodia: "18", tarde: "--", noche: "21" },
    { date: "2013-09-19", mediodia: "71", tarde: "--", noche: "78" },
    { date: "2013-09-18", mediodia: "89", tarde: "--", noche: "96" },
    { date: "2013-09-17", mediodia: "20", tarde: "--", noche: "33" },
    { date: "2013-09-16", mediodia: "22", tarde: "--", noche: "42" },
    { date: "2013-09-15", mediodia: "22", tarde: "--", noche: "09" },
    { date: "2013-09-14", mediodia: "91", tarde: "--", noche: "14" },
    { date: "2013-09-13", mediodia: "60", tarde: "--", noche: "45" },
    { date: "2013-09-12", mediodia: "18", tarde: "--", noche: "48" },
    { date: "2013-09-11", mediodia: "13", tarde: "--", noche: "09" },
    { date: "2013-09-10", mediodia: "04", tarde: "--", noche: "49" },
    { date: "2013-09-09", mediodia: "94", tarde: "--", noche: "98" },
    { date: "2013-09-08", mediodia: "44", tarde: "--", noche: "09" },
    { date: "2013-09-07", mediodia: "92", tarde: "--", noche: "97" },
    { date: "2013-09-06", mediodia: "89", tarde: "--", noche: "67" },
    { date: "2013-09-05", mediodia: "12", tarde: "--", noche: "54" },
    { date: "2013-09-04", mediodia: "53", tarde: "--", noche: "38" },
    { date: "2013-09-03", mediodia: "66", tarde: "--", noche: "83" },
    { date: "2013-09-02", mediodia: "72", tarde: "--", noche: "05" },
    { date: "2013-09-01", mediodia: "27", tarde: "--", noche: "56" },

    //   08
    { date: "2013-08-31", mediodia: "22", tarde: "--", noche: "56" },
    { date: "2013-08-30", mediodia: "89", tarde: "--", noche: "33" },
    { date: "2013-08-29", mediodia: "59", tarde: "--", noche: "32" },
    { date: "2013-08-28", mediodia: "99", tarde: "--", noche: "72" },
    { date: "2013-08-27", mediodia: "14", tarde: "--", noche: "67" },
    { date: "2013-08-26", mediodia: "00", tarde: "--", noche: "23" },
    { date: "2013-08-25", mediodia: "80", tarde: "--", noche: "73" },
    { date: "2013-08-24", mediodia: "04", tarde: "--", noche: "05" },
    { date: "2013-08-23", mediodia: "15", tarde: "--", noche: "55" },
    { date: "2013-08-22", mediodia: "49", tarde: "--", noche: "52" },
    { date: "2013-08-21", mediodia: "21", tarde: "--", noche: "97" },
    { date: "2013-08-20", mediodia: "33", tarde: "--", noche: "96" },
    { date: "2013-08-19", mediodia: "54", tarde: "--", noche: "05" },
    { date: "2013-08-18", mediodia: "90", tarde: "--", noche: "74" },
    { date: "2013-08-17", mediodia: "79", tarde: "--", noche: "44" },
    { date: "2013-08-16", mediodia: "34", tarde: "--", noche: "51" },
    { date: "2013-08-15", mediodia: "46", tarde: "--", noche: "11" },
    { date: "2013-08-14", mediodia: "33", tarde: "--", noche: "86" },
    { date: "2013-08-13", mediodia: "36", tarde: "--", noche: "94" },
    { date: "2013-08-12", mediodia: "35", tarde: "--", noche: "87" },
    { date: "2013-08-11", mediodia: "22", tarde: "--", noche: "21" },
    { date: "2013-08-10", mediodia: "38", tarde: "--", noche: "99" },
    { date: "2013-08-09", mediodia: "71", tarde: "--", noche: "51" },
    { date: "2013-08-08", mediodia: "04", tarde: "--", noche: "30" },
    { date: "2013-08-07", mediodia: "52", tarde: "--", noche: "59" },
    { date: "2013-08-06", mediodia: "30", tarde: "--", noche: "19" },
    { date: "2013-08-05", mediodia: "55", tarde: "--", noche: "77" },
    { date: "2013-08-04", mediodia: "28", tarde: "--", noche: "63" },
    { date: "2013-08-03", mediodia: "33", tarde: "--", noche: "74" },
    { date: "2013-08-02", mediodia: "27", tarde: "--", noche: "25" },
    { date: "2013-08-01", mediodia: "66", tarde: "--", noche: "72" },

    //   07
    { date: "2013-07-31", mediodia: "85", tarde: "--", noche: "37" },
    { date: "2013-07-30", mediodia: "77", tarde: "--", noche: "74" },
    { date: "2013-07-29", mediodia: "38", tarde: "--", noche: "18" },
    { date: "2013-07-28", mediodia: "77", tarde: "--", noche: "30" },
    { date: "2013-07-27", mediodia: "16", tarde: "--", noche: "94" },
    { date: "2013-07-26", mediodia: "66", tarde: "--", noche: "31" },
    { date: "2013-07-25", mediodia: "59", tarde: "--", noche: "90" },
    { date: "2013-07-24", mediodia: "90", tarde: "--", noche: "96" },
    { date: "2013-07-23", mediodia: "95", tarde: "--", noche: "00" },
    { date: "2013-07-22", mediodia: "59", tarde: "--", noche: "87" },
    { date: "2013-07-21", mediodia: "00", tarde: "--", noche: "40" },
    { date: "2013-07-20", mediodia: "00", tarde: "--", noche: "00" },
    { date: "2013-07-19", mediodia: "77", tarde: "--", noche: "77" },
    { date: "2013-07-18", mediodia: "92", tarde: "--", noche: "33" },
    { date: "2013-07-17", mediodia: "10", tarde: "--", noche: "09" },
    { date: "2013-07-16", mediodia: "12", tarde: "--", noche: "22" },
    { date: "2013-07-15", mediodia: "23", tarde: "--", noche: "14" },
    { date: "2013-07-14", mediodia: "83", tarde: "--", noche: "95" },
    { date: "2013-07-13", mediodia: "72", tarde: "--", noche: "46" },
    { date: "2013-07-12", mediodia: "62", tarde: "--", noche: "96" },
    { date: "2013-07-11", mediodia: "30", tarde: "--", noche: "83" },
    { date: "2013-07-10", mediodia: "39", tarde: "--", noche: "64" },
    { date: "2013-07-09", mediodia: "68", tarde: "--", noche: "09" },
    { date: "2013-07-08", mediodia: "69", tarde: "--", noche: "09" },
    { date: "2013-07-07", mediodia: "99", tarde: "--", noche: "89" },
    { date: "2013-07-06", mediodia: "68", tarde: "--", noche: "42" },
    { date: "2013-07-05", mediodia: "78", tarde: "--", noche: "12" },
    { date: "2013-07-04", mediodia: "46", tarde: "--", noche: "98" },
    { date: "2013-07-03", mediodia: "99", tarde: "--", noche: "96" },
    { date: "2013-07-02", mediodia: "54", tarde: "--", noche: "63" },
    { date: "2013-07-01", mediodia: "28", tarde: "--", noche: "95" },

    //   06
    { date: "2013-06-30", mediodia: "73", tarde: "--", noche: "15" },
    { date: "2013-06-29", mediodia: "45", tarde: "--", noche: "68" },
    { date: "2013-06-28", mediodia: "23", tarde: "--", noche: "06" },
    { date: "2013-06-27", mediodia: "69", tarde: "--", noche: "80" },
    { date: "2013-06-26", mediodia: "51", tarde: "--", noche: "30" },
    { date: "2013-06-25", mediodia: "10", tarde: "--", noche: "93" },
    { date: "2013-06-24", mediodia: "79", tarde: "--", noche: "89" },
    { date: "2013-06-23", mediodia: "07", tarde: "--", noche: "58" },
    { date: "2013-06-22", mediodia: "39", tarde: "--", noche: "80" },
    { date: "2013-06-21", mediodia: "41", tarde: "--", noche: "04" },
    { date: "2013-06-20", mediodia: "16", tarde: "--", noche: "01" },
    { date: "2013-06-19", mediodia: "74", tarde: "--", noche: "20" },
    { date: "2013-06-18", mediodia: "71", tarde: "--", noche: "24" },
    { date: "2013-06-17", mediodia: "61", tarde: "--", noche: "16" },
    { date: "2013-06-16", mediodia: "85", tarde: "--", noche: "53" },
    { date: "2013-06-15", mediodia: "10", tarde: "--", noche: "05" },
    { date: "2013-06-14", mediodia: "--", tarde: "--", noche: "17" },
    { date: "2013-06-13", mediodia: "89", tarde: "--", noche: "97" },
    { date: "2013-06-12", mediodia: "42", tarde: "--", noche: "16" },
    { date: "2013-06-11", mediodia: "53", tarde: "--", noche: "34" },
    { date: "2013-06-10", mediodia: "74", tarde: "--", noche: "64" },
    { date: "2013-06-09", mediodia: "40", tarde: "--", noche: "26" },
    { date: "2013-06-08", mediodia: "69", tarde: "--", noche: "95" },
    { date: "2013-06-07", mediodia: "66", tarde: "--", noche: "99" },
    { date: "2013-06-06", mediodia: "27", tarde: "--", noche: "25" },
    { date: "2013-06-05", mediodia: "12", tarde: "--", noche: "88" },
    { date: "2013-06-04", mediodia: "53", tarde: "--", noche: "22" },
    { date: "2013-06-03", mediodia: "41", tarde: "--", noche: "72" },
    { date: "2013-06-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-06-01", mediodia: "--", tarde: "--", noche: "--" },



    /*
    //   05
    { date: "2013-05-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-05-01", mediodia: "--", tarde: "--", noche: "--" },




    //   04
    { date: "2013-04-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-04-01", mediodia: "--", tarde: "--", noche: "--" },




    //   03
    { date: "2013-03-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-03-01", mediodia: "--", tarde: "--", noche: "--" },




    //   02
    { date: "2013-02-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-02-01", mediodia: "--", tarde: "--", noche: "--" },




    //   01
    { date: "2013-01-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-02", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2013-01-01", mediodia: "--", tarde: "--", noche: "--" }, */
    // 更多数据
];

// DOM 元素
const daySelector = document.getElementById("daySelector");
const monthSelector = document.getElementById("monthSelector");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.querySelector(".results");

// 初始化：动态生成天数下拉菜单 & 显示全部记录
function init() {
    // 动态生成天数
    const daysInMonth = 31; // 简单假设每个月有31天
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day.toString().padStart(2, "0");
        option.textContent = day;
        daySelector.appendChild(option);
    }

    // 默认显示全部记录
    displayResults(lotteryData);
}

// 显示记录
// 更新显示记录的函数
function displayResults(data) {
    resultsDiv.innerHTML = ""; // 清空之前的内容

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No hay resultados disponibles.</p>";
        return;
    }

    data.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";

        // 将日期格式从 YYYY-MM-DD 转为 DD/MM/YYYY
        const [year, month, day] = item.date.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        resultItem.innerHTML = `
            <div><strong>${formattedDate}</strong></div>
            <div>Mediodía: ${item.mediodia}</div>
            <div>Tarde: ${item.tarde}</div>
            <div>Noche: ${item.noche}</div>
        `;

        resultsDiv.appendChild(resultItem);
    });
}


// 筛选记录：显示选定日期及其之前的记录
function filterResults() {
    const selectedMonth = monthSelector.value.padStart(2, "0");
    const selectedDay = daySelector.value.padStart(2, "0");
    const selectedDate = `2013-${selectedMonth}-${selectedDay}`;

    // 筛选符合条件的记录（日期 <= 选定日期）
    const filteredResults = lotteryData.filter(item => item.date <= selectedDate);

    displayResults(filteredResults);
}





// 初始化页面
init();

// 绑定搜索按钮事件
searchButton.addEventListener("click", filterResults);

document.getElementById("yearSelector").addEventListener("change", function () {
    const selectedYear = this.value; // 获取用户选择的年份

    // 定义每个年份对应的网站链接
    const urls = {
        "2025": "/pwr/index.html",
        "2024": "/pwr/Historial/2024/",
        "2023": "/pwr/Historial/2023/",
        "2022": "/pwr/Historial/2022/",
        "2021": "/pwr/Historial/2021/",
        "2020": "/pwr/Historial/2020/",
        "2019": "/pwr/Historial/2019/",
        "2018": "/pwr/Historial/2018/",
        "2017": "/pwr/Historial/2017/",
        "2016": "/pwr/Historial/2016/",
        "2015": "/pwr/Historial/2015/",
        "2014": "/pwr/Historial/2014/",
        "2013": "/pwr/Historial/2013/",
    };
    // 跳转到对应的网站
    if (urls[selectedYear]) {
        window.location.href = urls[selectedYear]; // 跳转到对应链接
    } else {
        alert("URL no está configurada para el año seleccionado.");
    }
});
