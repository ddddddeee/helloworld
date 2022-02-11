async function OnloadFunction() {
  await getUsers();
}
async function getUsers() {
  const result = await $.ajax("https://reqres.in/api/users");
  console.log("result", result);
  $("#ajaxResult").text(JSON.stringify(result,undefined, 2));
}
$(document).ready(async function () {
  await OnloadFunction();
});
