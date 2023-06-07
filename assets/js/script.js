function show_site_runtime() {
    window.setTimeout("show_site_runtime()", 1000); // 每秒运行一次函数
    T = (new Date().getTime() - new Date("06/07/2023 22:00:00").getTime()); // 获取当前时间与指定时间之间的时间间隔（ms）
    var toStr = function(i){
        if (i < 10){
            return "0" + String(i)
        }
        else{
            return String(i)
        }
    }
    
    day_float = T / 86400000;
    day_int = Math.floor(day_float); // 计算天数并向下取整
    day_str = String(day_int);

    hour_float = (day_float - day_int) * 24;
    hour_int = Math.floor(hour_float); // 计算剩余不足一天的小时数并向下取整
    hour_str = toStr(hour_int);

    minute_float = (hour_float - hour_int) * 60;
    minute_int = Math.floor(minute_float); // 计算剩余不足一小时的分钟数并向下取整
    minute_str = toStr(minute_int);

    second_float = (minute_float - minute_int) * 60
    second_int = Math.floor(second_float); // 计算剩余不足一分钟的秒数并向下取整
    second_str = toStr(second_int);

    site_runtime.innerHTML = day_str + " 天 " + hour_str + " 小时 " + minute_str + " 分 " + second_str + " 秒 "
}
show_site_runtime();

jinrishici.load(function (result) {
    var sentence = document.querySelector("#poem_sentence")
    var info = document.querySelector("#poem_info")
    sentence.innerHTML = result.data.content
    info.innerHTML = '——【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
});
