export function getNekoStat(type: "views" | "followers" | "updates"): string {
  const el = document.getElementById("nekoweb-stats");
  if (!el) return "...";

  let count = el.getAttribute(`data-${type}`);

  if (count === "<!--# views -->") count = "0,000";
  if (count === "<!--# followers -->") count = "00";

  return count ?? "...";
}
