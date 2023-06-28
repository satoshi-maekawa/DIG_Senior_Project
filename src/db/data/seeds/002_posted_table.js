/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posted').del()
  await knex('posted').insert([
    {title: '⭐️デジタル予算執行マニュアル',"post-date":"2022-06-22",tag:"予算", "url":"https://toyotajp-my.sharepoint.com.mcas.ms/:p:/r/personal/1179117_tmc_twfr_toyota_co_jp/_layouts/15/doc2.aspx?sourcedoc=%7BEABBC03B-210D-44D2-8C48-55F56AB04EA8%7D&file=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%BA%88%E7%AE%97%E5%9F%B7%E8%A1%8C_%E5%AE%9F%E5%8B%99%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&login_hint=1570381%40tmc.twfr.toyota.co.jp&ct=1687918874204&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&cid=78b42ba5-bd4c-493e-a57e-5e31d4a541e9&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=072d7ce4-8a32-4021-bc0a-10e986a42b62", "user-id":10025},
    {title: '⭐️道路運送車両法',"post-date":"2022-10-18",tag:"車検", "url":"https://elaws.e-gov.go.jp/document?lawid=326AC0000000185", "user-id":10025},
    {title: '調査実施要領',"post-date":"2022-12-18",tag:"CXM", "url":"https://toyotajp.sharepoint.com.mcas.ms/sites/msteams_9ab7fa/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fmsteams%5F9ab7fa%2FShared%20Documents%2F999%5F%E4%BB%96%E9%83%A8%E7%BD%B2%E3%81%A8%E5%85%B1%E6%9C%89&viewid=fba5f486%2D910a%2D46f1%2D9a4d%2D2e793f0768cc", "user-id":10024},
    {title: 'CXM-B 調査データ',"post-date":"2023-01-10",tag:"CXM", "url":"https://toyotajp.sharepoint.com.mcas.ms/sites/msteams_9ab7fa/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fmsteams%5F9ab7fa%2FShared%20Documents%2F99%5F%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E8%A9%B2%E5%BD%93%E3%83%87%E3%83%BC%E3%82%BF%2FCXM%2DB&viewid=fba5f486%2D910a%2D46f1%2D9a4d%2D2e793f0768cc", "user-id":10023},
    {title: 'CXM-C 調査データ',"post-date":"2023-01-11",tag:"CXM", "url":"https://toyotajp.sharepoint.com.mcas.ms/sites/msteams_9ab7fa/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fmsteams%5F9ab7fa%2FShared%20Documents%2F99%5F%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E8%A9%B2%E5%BD%93%E3%83%87%E3%83%BC%E3%82%BF%2FCXM%2DC&viewid=fba5f486%2D910a%2D46f1%2D9a4d%2D2e793f0768cc", "user-id":10023},
    {title: 'CXM メタデータ',"post-date":"2022-02-12",tag:"CXM", "url":"https://toyotajp.sharepoint.com.mcas.ms/:x:/r/sites/msteams_9ab7fa/_layouts/15/Doc.aspx?sourcedoc=%7B7A3EC82D-DBAA-489F-AC87-4EE43C40CC53%7D&file=%E2%97%86CXM%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF.xlsx&action=default&mobileredirect=true", "user-id":10024},
    {title: '⭐️概要説明',"post-date":"2022-02-25",tag:"CXM", "url":"https://toyotajp.sharepoint.com/:p:/s/msteams_9ab7fa/EeosZXyOWxFDg9qsG6T2QyoB86W0gAfTKCdRZXtCqUs7Jg?e=tOMsrM", "user-id":10024},
    {title: '⭐️販売店宛書簡',"post-date":"2022-03-03",tag:"CXM", "url":"https://toyotajp.sharepoint.com/:b:/s/msteams_9ab7fa/EaO3F_PEgI5OnVog3B7m8yYBYmXuXM418lo-4lVAKoe2Cw?e=Cj3qei", "user-id":10024},
    {title: '一般経費企画書',"post-date":"2022-03-05",tag:"予算", "url":"https://toyotajp.sharepoint.com.mcas.ms/:x:/r/sites/msteams_5cd9f2/_layouts/15/doc2.aspx?sourcedoc=%7B4E931DDC-F71D-45F4-A715-88534630C7DA%7D&file=%EF%BC%91%EF%BC%8E%E4%BC%81%E7%94%BB%E6%9B%B8%EF%BC%88%E3%83%96%E3%83%A9%E3%83%B3%E3%82%AF%EF%BC%89.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&login_hint=1570381%40tmc.twfr.toyota.co.jp&ct=1687920647205&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&cid=ea6aec1b-521c-4dc7-85f9-e3acab235eb4&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=072d7ce4-8a32-4021-bc0a-10e986a42b62", "user-id":10025},
    {title: '⭐️応援コメント',"post-date":"2022-03-18",tag:"CXM", "url":"https://toyotajp-my.sharepoint.com/:u:/g/personal/1570381_tmc_twfr_toyota_co_jp/EavD_C28vgVCuhqFA-Y9CRMBZV_LiFQOzcurUtfh9MNSJQ?e=K8wbNj", "user-id":10024},
    {title: '⭐️中堅社員研修',"post-date":"2022-03-19",tag:"その他", "url":"https://toyotajp-my.sharepoint.com/:b:/g/personal/1570381_tmc_twfr_toyota_co_jp/EW-WOjZFk-xJrodlus25LjYB8iOBK-9CIV7gd6yGF4QTRA?e=QMRxO0", "user-id":10025},
    {title: '⭐️ITパスポート過去問道場',"post-date":"2022-03-23",tag:"その他", "url":"https://www.itpassportsiken.com/ipkakomon.php", "user-id":10004}
  ]);
};
