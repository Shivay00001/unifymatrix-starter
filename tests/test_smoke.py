"""Smoke test: JS entry points exist and parse; firebase config is present."""
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent.parent
JS_FILES = ("apps.js", "chat.js", "firebase.js", "login.js")


def test_js_entries_exist_and_parse():
    for name in JS_FILES:
        p = ROOT / name
        assert p.exists(), f"{name} missing"
        r = subprocess.run(["node", "--check", str(p)], capture_output=True, text=True)
        assert r.returncode == 0, f"{name}: {r.stderr}"


def test_firebase_config_present():
    src = (ROOT / "firebase.js").read_text()
    assert "initializeApp" in src
    assert "firebaseConfig" in src


def test_index_html_exists():
    assert (ROOT / "index.html").exists(), "index.html missing"
