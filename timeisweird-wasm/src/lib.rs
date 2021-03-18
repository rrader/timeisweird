use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn palindrome() -> i32 {
    return 10;
}


#[cfg(test)]
mod tests {
    use super::palindrome;

    #[test]
    fn test_palindrome() {
        assert_eq!(palindrome(), 10);
    }
}
