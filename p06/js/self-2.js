function level4() { throw new Error('что-то сломалось'); }
function level3() { level4(); }
function level2() { level3(); }
function level1() { level2(); }

try {
  level1();
} catch (error) {
  console.log(error.stack);
  const lines = error.stack.split('\n');
  console.log('место ошибки:', lines[1].trim());
}

function safe(fn) {
  try {
    return { ok: true, value: fn(), error: null };
  } catch (error) {
    return { ok: false, value: null, error };
  }
}

console.log(safe(() => 2 + 2));
const bad = safe(() => JSON.parse('[1,'));
console.log(bad.ok, bad.error.name);
const deep = safe(level1);
console.log(deep.ok, deep.error.message);
