'use client';

import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';
import { useState } from 'react';
import { nunitoSans } from '@/app/fonts/font';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/api/placeholder/20/15',  // Replace with actual flag image path
    label: 'English (US)',
    image: 'uk.svg'
  },
  {
    code: 'hi',
    name: 'हिंदी',
    flag: '/api/placeholder/20/15',  // Replace with actual flag image path
    label: 'Hindi',
    image: 'india.svg'
  }
];

function LanguageSwitcher() {

  
  // Extract the current locale from the pathname


  // Initialize with the current locale
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="w-[122px]">
      <Select
        value={selectedLanguage}
        onValueChange={(value) => setSelectedLanguage(value)}
      >
        <SelectTrigger className="w-[126px] h-[30px] border  flex justify-between  outline-none border-black">
          <SelectValue>
            <div className="flex items-center gap-2">
              <Image
                src={languages.find(lang => lang.code === selectedLanguage)?.image || ''}
                alt={`${selectedLanguage} flag`}
                width={30}
                height={30}
                className="rounded"
              />
              <span className={`${nunitoSans.className} font-semibold text-[#646464]`}>
                {languages.find(lang => lang.code === selectedLanguage)?.name}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map((language) => (
              <SelectItem
                key={language.code}
                value={language.code}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={language.image}
                    alt={`${language.name} flag`}
                    width={30}
                    height={30}
                    className="rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-xs text-gray-500">
                      {language.label}
                    </span>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSwitcher;
