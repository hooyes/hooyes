var JSONDATA={
    "Data": {
        "BaseResult": {
            "Code": 0,
            "Message": ""
        },
        "SequenceId": 1000,
        "SequenceName": "lung_default",
        "Subject": {
            "SubjectId": 10001,
            "SubjectName": "肺癌",
            "Description": null
        },
        "TemplateSet": {
            "TemplateId": 1000,
            "TemplateName": "default",
            "Description": null,
            "Templates": [{
                "QuestionType": "blank-filling",
                "HtmlName": "default_blank-filling"
            },
            {
                "QuestionType": "multiple-choice",
                "HtmlName": "default_multiple-choice"
            },
            {
                "QuestionType": "multi-selection",
                "HtmlName": "default_multi-selection"
            },
            {
                "QuestionType": "true-false",
                "HtmlName": "default_true-false"
            }]
        },
        "SequenceDetails": [{
            "Number": 1,
            "Question": {
                "QuestionId": 100010001,
                "Subject": null,
                "QuestionKey": "k_gender",
                "QuestionBody": "请选择性别",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "男"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "女"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 2,
            "Question": {
                "QuestionId": 100010002,
                "Subject": null,
                "QuestionKey": "k_age",
                "QuestionBody": "请输入年龄",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 3,
            "Question": {
                "QuestionId": 100010101,
                "Subject": null,
                "QuestionKey": "k_is_smoker",
                "QuestionBody": "现在是否吸烟",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 4,
            "Question": {
                "QuestionId": 100010102,
                "Subject": null,
                "QuestionKey": "k_smoke_pack_year",
                "QuestionBody": "请输入吸烟的年限",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_smoker==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 5,
            "Question": {
                "QuestionId": 100010103,
                "Subject": null,
                "QuestionKey": "k_was_smoker",
                "QuestionBody": "是否曾经吸过烟",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "$k_is_smoker==\u0027false\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 6,
            "Question": {
                "QuestionId": 100010104,
                "Subject": null,
                "QuestionKey": "k_smoke_quit_year",
                "QuestionBody": "戒烟几年了",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_was_smoker==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 7,
            "Question": {
                "QuestionId": 100010201,
                "Subject": null,
                "QuestionKey": "k_is_cook_lot",
                "QuestionBody": "经常做饭吗",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 8,
            "Question": {
                "QuestionId": 100010202,
                "Subject": null,
                "QuestionKey": "k_cook_location",
                "QuestionBody": "在哪做饭",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_is_cook_lot==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "客厅"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "卧室"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "室内厨房"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "室外厨房"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "5",
                    "OptionText": "其他"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 9,
            "Question": {
                "QuestionId": 100010203,
                "Subject": null,
                "QuestionKey": "k_cook_fuel",
                "QuestionBody": "用什么燃料做饭",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_is_cook_lot==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "煤气"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "煤"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "电器"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "汽油/煤油"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "5",
                    "OptionText": "其他"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 10,
            "Question": {
                "QuestionId": 100010204,
                "Subject": null,
                "QuestionKey": "k_cook_rangehood",
                "QuestionBody": "做饭用油烟机吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "$k_is_cook_lot==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 11,
            "Question": {
                "QuestionId": 100010205,
                "Subject": null,
                "QuestionKey": "k_is_stay_basement_offen",
                "QuestionBody": "是否长期待在地下室？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 12,
            "Question": {
                "QuestionId": 100010206,
                "Subject": null,
                "QuestionKey": "k_basement_daily_stay",
                "QuestionBody": "在地下室停留时间",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_is_stay_basement_offen==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "\u003c4小时/天"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "4-8小时/天"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "\u003e8小时/天"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 13,
            "Question": {
                "QuestionId": 100010207,
                "Subject": null,
                "QuestionKey": "k_basement_air_condition",
                "QuestionBody": "地下室通风条件",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_is_stay_basement_offen==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "几乎不通风"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "偶尔"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "经常"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "频繁"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "5",
                    "OptionText": "没有窗户"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 14,
            "Question": {
                "QuestionId": 100010208,
                "Subject": null,
                "QuestionKey": "k_is_granite_used",
                "QuestionBody": "是否用花岗岩做装修材料？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 15,
            "Question": {
                "QuestionId": 100010209,
                "Subject": null,
                "QuestionKey": "k_long_live_location",
                "QuestionBody": "近十年来您居住时间最长的地方是？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入地点",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 16,
            "Question": {
                "QuestionId": 100010210,
                "Subject": null,
                "QuestionKey": "k_opion_to_air",
                "QuestionBody": "您认为近十年居住的地区空气怎么样？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "新鲜"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "一般"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "差"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "很差"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 17,
            "Question": {
                "QuestionId": 100010301,
                "Subject": null,
                "QuestionKey": "k_toxin_often_touched",
                "QuestionBody": "工作中是否经常接触以下物质？",
                "QuestionType": "multi-selection",
                "ValidRegex": "请选择经常接触的一项或者多项",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "石棉"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "铬酸盐"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "焦炉逸散物"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "砷及其化合物"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "5",
                    "OptionText": "氯甲醚/双氯甲醚"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "6",
                    "OptionText": "电离辐射(含矿工氡暴露)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "7",
                    "OptionText": "毛沸石"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "8",
                    "OptionText": "都不接触"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 18,
            "Question": {
                "QuestionId": 100010302,
                "Subject": null,
                "QuestionKey": "k_toxin_environment_stayed_years",
                "QuestionBody": "在上述环境下工作了几年？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_toxin_often_touched\u003c\u003e8",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 19,
            "Question": {
                "QuestionId": 100010303,
                "Subject": null,
                "QuestionKey": "k_is_protection_adopted",
                "QuestionBody": "工作时是否使用防护面具或者其他肺部防护措施？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "$k_toxin_often_touched\u003c\u003e8",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 20,
            "Question": {
                "QuestionId": 100010401,
                "Subject": null,
                "QuestionKey": "k_vitamin_take_years",
                "QuestionBody": "您是否每日服用维生素一年或者更长时间？",
                "QuestionType": "multi-selection",
                "ValidRegex": "请选择经常接触的一项或者多项",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "维生素 D"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "维生素 C"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "维生素 E"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "无"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 21,
            "Question": {
                "QuestionId": 100010402,
                "Subject": null,
                "QuestionKey": "k_drinkwater_source",
                "QuestionBody": "饮水主要来源？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "地窖水、池塘水、浅井水"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "湖水、河水"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "深井水、泉水"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "自来水(经处理)"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 22,
            "Question": {
                "QuestionId": 100010403,
                "Subject": null,
                "QuestionKey": "k_is_arsenic_in_water",
                "QuestionBody": "饮水中是否含砷？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "是"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "否"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "不详"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 23,
            "Question": {
                "QuestionId": 100010404,
                "Subject": null,
                "QuestionKey": "k_frequency_eat_vege",
                "QuestionBody": "您经常吃新鲜蔬菜吗？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "0",
                    "OptionText": "从不"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "很少(\u003c2次/周)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "经常(2-5次/周)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "频繁(\u003e5次/周)"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 24,
            "Question": {
                "QuestionId": 100010405,
                "Subject": null,
                "QuestionKey": "k_average_vege_amount",
                "QuestionBody": "您每次约吃多少蔬菜？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_frequency_eat_vege\u003c\u003e0",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "0-100克"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "100-200克"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "200-400克"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "\u003e400克"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 25,
            "Question": {
                "QuestionId": 100010406,
                "Subject": null,
                "QuestionKey": "k_frequency_eat_fruit",
                "QuestionBody": "您经常吃新鲜水果吗？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "0",
                    "OptionText": "从不"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "很少(\u003c2次/周)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "经常(2-5次/周)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "频繁(\u003e5次/周)"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 26,
            "Question": {
                "QuestionId": 100010407,
                "Subject": null,
                "QuestionKey": "k_tea_drink_often",
                "QuestionBody": "您经常喝哪种茶？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "绿茶"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "红茶"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "花茶"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "很少喝或不喝茶"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 27,
            "Question": {
                "QuestionId": 100010408,
                "Subject": null,
                "QuestionKey": "k_frequency_drink_tea",
                "QuestionBody": "以下哪项能正确描述您的喝茶习惯？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_tea_drink_often\u003c\u003e4",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "经常(2-5次/周)"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "很多,频繁(\u003e5次/周)"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 28,
            "Question": {
                "QuestionId": 100010501,
                "Subject": null,
                "QuestionKey": "k_is_parent_had_tumor",
                "QuestionBody": "你的父母是否有人得过肿瘤？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 29,
            "Question": {
                "QuestionId": 100010502,
                "Subject": null,
                "QuestionKey": "k_is_sibling_had_tumor",
                "QuestionBody": "你的兄弟姐妹是否有人得过肿瘤？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 30,
            "Question": {
                "QuestionId": 100010503,
                "Subject": null,
                "QuestionKey": "k_is_child_had_tumor",
                "QuestionBody": "你的子女是否有人得过肿瘤？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 31,
            "Question": {
                "QuestionId": 100010504,
                "Subject": null,
                "QuestionKey": "k_had_tumor",
                "QuestionBody": "你是否患过癌症？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 32,
            "Question": {
                "QuestionId": 100010505,
                "Subject": null,
                "QuestionKey": "k_cancer_had",
                "QuestionBody": "你患过哪种癌？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "",
                "ErrorMessage": "",
                "Condition": "$k_had_tumor==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "膀胱癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "肺癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "乳腺癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "4",
                    "OptionText": "口腔癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "5",
                    "OptionText": "子宫颈癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "6",
                    "OptionText": "鼻癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "7",
                    "OptionText": "结直肠癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "8",
                    "OptionText": "胰腺癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "9",
                    "OptionText": "食管癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "10",
                    "OptionText": "胃癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "11",
                    "OptionText": "肾癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "12",
                    "OptionText": "甲状腺癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "13",
                    "OptionText": "喉癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "14",
                    "OptionText": "移行细胞癌"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "14",
                    "OptionText": "咽癌"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 33,
            "Question": {
                "QuestionId": 100010506,
                "Subject": null,
                "QuestionKey": "k_cancer_diagnosed_year",
                "QuestionBody": "确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_had_tumor==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 34,
            "Question": {
                "QuestionId": 100010507,
                "Subject": null,
                "QuestionKey": "k_is_had_asbestosis",
                "QuestionBody": "你曾经被确诊过石棉肺/矽肺吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 35,
            "Question": {
                "QuestionId": 100010508,
                "Subject": null,
                "QuestionKey": "k_asbestosis_diagnosed_year",
                "QuestionBody": "石棉肺确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_had_asbestosis==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 36,
            "Question": {
                "QuestionId": 100010509,
                "Subject": null,
                "QuestionKey": "k_is_had_bronchiectasis",
                "QuestionBody": "你曾经被确诊过支气管扩张吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 37,
            "Question": {
                "QuestionId": 100010510,
                "Subject": null,
                "QuestionKey": "k_bronchiectasis_diagnosed_year",
                "QuestionBody": "支气管扩张确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_had_bronchiectasis==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 38,
            "Question": {
                "QuestionId": 100010511,
                "Subject": null,
                "QuestionKey": "k_is_had_pulmonary_fibrosis",
                "QuestionBody": "你曾经被确诊过肺纤维化吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 39,
            "Question": {
                "QuestionId": 100010512,
                "Subject": null,
                "QuestionKey": "k_pulmonary_fibrosis_diagnosed_year",
                "QuestionBody": "肺纤维化确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_had_pulmonary_fibrosis==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 40,
            "Question": {
                "QuestionId": 100010513,
                "Subject": null,
                "QuestionKey": "k_is_had_pneumonia",
                "QuestionBody": "你曾经被确诊过肺炎吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 41,
            "Question": {
                "QuestionId": 100010514,
                "Subject": null,
                "QuestionKey": "k_pneumonia_diagnosed_year",
                "QuestionBody": "肺炎确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_had_pneumonia==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 42,
            "Question": {
                "QuestionId": 100010515,
                "Subject": null,
                "QuestionKey": "k_is_had_pulmonary_sarcoidosis",
                "QuestionBody": "你曾经被确诊过肺结节病吗？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 43,
            "Question": {
                "QuestionId": 100010516,
                "Subject": null,
                "QuestionKey": "k_pulmonary_sarcoidosis_diagnosed_year",
                "QuestionBody": "肺结节病确诊年龄是几岁？",
                "QuestionType": "blank-filling",
                "ValidRegex": "",
                "AnswerHint": "请输入数字",
                "ErrorMessage": "",
                "Condition": "$k_is_had_pulmonary_sarcoidosis==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 44,
            "Question": {
                "QuestionId": 100010517,
                "Subject": null,
                "QuestionKey": "k_is_5kg_lost_past1year",
                "QuestionBody": "在过去五年里,您是否有过不明原因的体重下降且超过5公斤？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 45,
            "Question": {
                "QuestionId": 100010518,
                "Subject": null,
                "QuestionKey": "k_was_hemoptysis",
                "QuestionBody": "您是否出现过咯血症状？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 46,
            "Question": {
                "QuestionId": 100010519,
                "Subject": null,
                "QuestionKey": "k_was_chest_xray",
                "QuestionBody": "您是否做过胸部透视或X光检查？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 47,
            "Question": {
                "QuestionId": 100010520,
                "Subject": null,
                "QuestionKey": "k_was_chestorlung_ct_past2year",
                "QuestionBody": "最近2年是否做过胸部或肺部CT检查？",
                "QuestionType": "true-false",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "",
                    "OptionText": ""
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        },
        {
            "Number": 48,
            "Question": {
                "QuestionId": 100010521,
                "Subject": null,
                "QuestionKey": "k_reason_4_ct",
                "QuestionBody": "最后一次CT检查的原因是？",
                "QuestionType": "multiple-choice",
                "ValidRegex": "",
                "AnswerHint": "请选择是或否",
                "ErrorMessage": "",
                "Condition": "$k_was_chestorlung_ct_past2year==\u0027true\u0027",
                "QuestionOptions": [{
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "1",
                    "OptionText": "因身体不适"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "2",
                    "OptionText": "以往所患疾病的复查"
                },
                {
                    "Id": 0,
                    "QuestionId": 0,
                    "OptionValue": "3",
                    "OptionText": "常规体检或筛查的一部分(筛查指在疾病症状出现前进行的医学检)"
                }]
            },
            "DefaultValue": "",
            "Status": "Open"
        }]
    },
    "isSuccess": true
}