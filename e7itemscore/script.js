minmax = {
  "main": {
    "atkp": 60,
    "defp": 60,
    "hpp": 60,
    "eff": 60,
    "res": 60,
    "chc": 55,
    "chd": 65,
    "spd": 40
  },
  "sub": {
    "atkp": 48,
    "defp": 48,
    "hpp": 48,
    "eff": 48,
    "res": 48,
    "chc": 30,
    "chd": 42,
    "spd": 24
  },
  "min": {
    "atkp": 48,
    "defp": 48,
    "hpp": 48,
    "eff": 48,
    "res": 48,
    "chc": 30,
    "chd": 42,
    "spd": 24
  },
  "sub2": {
    "atkp": 56,
    "defp": 56,
    "hpp": 56,
    "eff": 56,
    "res": 56,
    "chc": 36,
    "chd": 49,
    "spd": 30
  }
}


$("#calc").click(function() {
  enhance_cnt = Number($("#enhance").val()/3);
  isT7 = $("#isT7").prop("checked");
  opt_cnt = 4
	score_sum = 0
  score_max = 100 + (opt_cnt-1)*100/(enhance_cnt+1)
  // score_max = 400
  for (i = 0; i < opt_cnt; i++) {
  	name = $($(".opt_sub .opt_name")[i]).val();
    console.log($(".opt_sub .opt_name")[i])
    if(name=="-----") {
    	continue;
    }
    val  = $($(".opt_sub .opt_val")[i]).val();
    
    opt_max = (enhance_cnt+1) * (isT7?minmax["sub2"]:minmax["sub"])[name] / 6;
    opt_score = (100 * val / opt_max);
    score_sum += opt_score;
    
    console.log(name, val, opt_max, opt_score)
    
    $($(".opt_sub .opt_max")[i]).text(opt_max);
    $($(".opt_sub .opt_score")[i]).text(opt_score.toFixed(2));

      badge_txt = "Bad"
      badge_cls = "badge-secondary"
      // if(opt_score>100) {
      //   badge_txt = "?"
      //   badge_cls = "badge-secondary"
      // }
      // else 
      if(opt_score>80) {
        badge_txt = "Legend"
        badge_cls = "badge-danger"
      }
      else if(opt_score>70) {
        badge_txt = "Excellent"
        badge_cls = "badge-warning"
      }
      else if(opt_score>60) {
        badge_txt = "Great"
        badge_cls = "badge-success"
      }
      else if(opt_score>50) {
        badge_txt = "Good"
        badge_cls = "badge-primary"
      }


      $($(".opt_sub .score_badge")[i]).removeClass().addClass(badge_cls).addClass("badge text-wrap score_badge")
      $($(".opt_sub .score_badge")[i]).text(badge_txt)
  }
  score_per = (100*score_sum/score_max)
  console.log(score_sum, score_max, score_per)

  $(".score_max").text(score_max.toFixed(2))
  $(".score").text(score_sum.toFixed(2))
  $(".score_per").text(Math.min(100,score_per).toFixed(2) + "%")

  badge_txt = "Bad"
  badge_cls = "badge-secondary"
  if(score_per>100) {
    badge_txt = "?"
    badge_cls = "badge-secondary"
  }
  else if(score_per>80) {
    badge_txt = "Legend"
    badge_cls = "badge-danger"
  }
  else if(score_per>70) {
    badge_txt = "Excellent"
    badge_cls = "badge-warning"
  }
  else if(score_per>60) {
    badge_txt = "Great"
    badge_cls = "badge-success"
  }
  else if(score_per>50) {
    badge_txt = "Good"
    badge_cls = "badge-primary"
  }

  $("#score_badge").removeClass().addClass(badge_cls).addClass("badge text-wrap")
  $("#score_badge").text(badge_txt)

})