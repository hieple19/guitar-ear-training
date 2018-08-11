$(document).ready(() => {
    $(".nav-bar__dropdown-button").on("click", () => {
      if ($(".nav-bar__dropdown-content").is(":visible")) {
        $(".nav-bar__dropdown-content").css("display", "none");
      } else {
        $(".nav-bar__dropdown-content").css("display", "flex");
      }
    });
  });
  