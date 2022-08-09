export default (errorCode) => {
    switch(errorCode){
        case 'auth/wrong-password':
            return 'Şifrenizi kontrol ediniz';
        case 'auth/user-not-found':
            return 'Kullanıcı bulunamadı';
        case 'auth/invalid-email':
            return 'E-posta adresi geçersiz';
        case 'auth/email-already-in-use':
            return 'E-posta adresi kullanılıyor';
        case 'auth/weak-password':
            return 'Şifre yetersiz';
        default:
            return 'Bilinmeyen bir hata oluştu' + errorCode;
    }
}