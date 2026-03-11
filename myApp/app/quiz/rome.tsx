import { StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const category = "Starożytny Rzym";
const questions = [
  {
    text: "Kto był pierwszym cesarzem Rzymu?",
    answers: ["August", "Juliusz Cezar", "Neron", "Trajan"],
    correct: 0,
  },
  {
    text: "W którym roku upadło Cesarstwo Zachodniorzymskie?",
    answers: ["410", "476", "509", "395"],
    correct: 1,
  },
  {
    text: "Jak nazywała się słynna rzymska droga?",
    answers: ["Via Appia", "Via Roma", "Via Caesar", "Via Maxima"],
    correct: 0,
  },
];


export default function QuizScreen() {
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[currentQuestion];
  
  function handleAnswer(index: number) {
    setSelected(index);
  }
  function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelected(null);
  }
}

  return (
    <ThemedView style={styles.screen}>
      <ThemedText type="title">Quiz: {category}</ThemedText>
      <ThemedText>
         Pytanie {currentQuestion + 1} / {questions.length}
      </ThemedText>

      <ThemedView style={styles.container}>
        <ThemedText style={styles.question}>
          {question.text}
        </ThemedText>

        {question.answers.map((answer, index) => (
          <Pressable
            key={index}
            style={[
              styles.questionBlock,
              selected === index &&
                (index === question.correct
                  ? styles.correct
                  : styles.wrong),
            ]}
            onPress={() => handleAnswer(index)}
          >
            <ThemedText>{answer}</ThemedText>
          </Pressable>
        ))}
      </ThemedView>
      <Pressable style={styles.nextButton} onPress={nextQuestion}>
        <ThemedText>Następne pytanie</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },

  container: {
    marginTop: 30,
    gap: 12,
  },

  question: {
    fontSize: 20,
    marginBottom: 10,
  },

  questionBlock: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  nextButton: {
  marginTop: 20,
  padding: 15,
  backgroundColor: "#3b82f6",
  borderRadius: 10,
  alignItems: "center",
  },
  correct: {
    backgroundColor: '#4CAF50',
  },

  wrong: {
    backgroundColor: '#E53935',
  },
});