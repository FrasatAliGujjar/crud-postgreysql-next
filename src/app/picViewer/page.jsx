import Image from 'next/image';

const CenteredImage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Image 
                src={"https://uenjlyfmspzvqiljrxys.supabase.co/storage/v1/object/public/Student_Bucket/1737479243380-paati.png"} 
                alt="Descriptive Text" 
                width={300} 
                height={300} 
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

export default CenteredImage;
